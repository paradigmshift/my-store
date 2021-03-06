var clientData = {}; // toplevel container for client data

var receipts = {};

function getClientData () {
    $.getJSON("http://localhost:5000?callback=?", function(data) {
        clientData = data;
    });
}

function getReceipts (receiptNumber) {
    var query = "http://localhost:5000/receipt/" + receiptNumber +
            "?callback=?";
    $.getJSON(query, function(data) {
        receipts = data;
    });
}

var showFunctionList = {
    "Sales": showSales,
    "Inventory": showInventory,
    "Branches": showBranch,
    "Profits": showProfits
};

function categoryMatcher (categoryData, itemData, markup, fnList, branchName) {
    var fn = fnList[categoryData];
    return branchName ? categoryFn(fn, categoryData, itemData, markup,
                                   branchName) : categoryFn(fn, categoryData, itemData, markup);
};

function categoryFn (fn, categoryData, itemData, markup, branchName) {
    if (categoryData === 'Branches') {
        return fn.call(this, markup);
    } 
    return branchName ? fn.call(this, itemData,  markup, branchName) :
        fn.call(this, itemData, markup, branchName);
};

function showSales (itemData, markup, branchName) {
    markup +='<ul data-role="listview" data-inset="true" >';
    if (branchName) {
        for (r in clientData.branches[branchName].sales) {
            var receipt = receipts[r];
            markup += "<li data-icon='search'><a "
                + " href=#receipt?number="+ receipt.rnumber
                +" ><div class='ui-grid-a'><span"
                + " class='ui-block-a'>" + "Receipt: " +
                receipt.rnumber + "</span><span class='ui-block-b'"
                + " style='text-align:right'>"+ "Amount: " +
                receipt.sales + "</span></div></a></li>";
        }
    }
    for (item in itemData) {
        markup += "<li>" + '<div class="ui-grid-b">'
            + "<span class='ui-block-a'>" + itemData[item].name +
            "</span>"
            + "<span class='ui-block-b' style='text-align:center'>" + "Units Sold: " + itemData[item].sold +
            "</span>" + "<span class='ui-block-c' style='text-align:right'>" + "Total Sales: " +
            "<span class='ui-li-count'>" +itemData[item].price *
            itemData[item].sold + "</span></span></div></li>";
    }
    markup += "</ul>";
    return markup;
};

function showInventory (itemData, markup) {
    markup +='<ul data-role="listview" data-inset="true" >';
    for (item in clientData.items) {
        markup += "<li>" + '<div'
            + ' class="ui-grid-a"> <span class = "ui-block-a">' +
            itemData[item].name + '</span><span class = "ui-block-b" style="text-align:right">'
            + "Units left: " + "<span class = 'ui-li-count'>" +
            itemData[item].inventory + "</span> "+"</span>" + "</div></li>";
    }
    markup += "</ul>";
    return markup;
};

function showProfits (itemData, markup) {
    markup +='<ul data-role="listview" data-inset="true" data-filter="true">';
    var items = clientData.items;
    for (item in items) {
        markup += "<li><div class='ui-grid-a'><span"
            + " class='ui-block-a'> Item: " + items[item].name +
        "</span><span class='ui-grid-b'> Profit: " + (((items[item].price
            / items[item].cost) * 100) - 100).toFixed(2) + "% </span></div></li>";
    }
    markup += "</ul>";
    return markup;
};

function showBranch (markup) {
    markup +='<ul data-role="listview" data-inset="true" >';
    for (branch in clientData.branches) {
        markup += "<li>" + '<a href="#branch-items?branch=' +
        clientData.branches[branch].name + '">' +
            clientData.branches[branch].name + "</a>" +"</li>";
    }
    markup += "</ul>";
    return markup;
};

// page for branch views (add and view sales and inventory)
function branchMenu (branchName) {
    return "<h2>Select a Category Below:</h2>" +
        "<ul data-role='listview' data-inset='true'>" +
        // View sales and inventory
        "<li><a href='#category-items?branch=" + branchName +
        "?category=Sales'>View Sales</a></li>"+
        "<li><a href='#category-items?branch=" + branchName +
        "?category=Inventory'>View Inventory</a></li>" +
        // Add sales and inventory
        "<li><a href='#add-sale?branch=" + branchName +
        "?category=addSale'>Enter a Sale</a></li>" + "<li><a"
        + " href='#add-inventory?branch=" + branchName +
        "?category=addInventory'>Enter Inventory</a></li>"
        +
    "</ul>";
}

// creates page for view sales, inventory, or branches
function showCategory( urlObj, options, category, itemData,
                       fnList, branchName )
{
    var categoryName = urlObj.hash.replace( /.*=/, "" ),
	    pageSelector = urlObj.hash.replace( /\?.*$/, "" );
    if ( categoryName ) {
	    var $page = $( pageSelector ),
		    $header = $page.children( ":jqmData(role=header)" ),
		    $content = $page.children( ":jqmData(role=content)" ),
            markup='';
        // clicked on sales, inventory, or branches (top level or
        // branch level view)
        if (category in fnList) {
            markup += categoryMatcher(category, itemData, markup,
                                      fnList, branchName);
        } else { 
            markup = branchMenu (categoryName);
        }
        $header.find( "h1" ).html( categoryName );
	    $content.html( markup );
        $page.page();
	    $content.find( ":jqmData(role=listview)" ).listview();
	    options.dataUrl = urlObj.href;
	    $.mobile.changePage( $page, options );
    }
}

var addFunctionList = {
    "addSale": populateItemList,
    "addInventory": populateItemList
};

var itemList = []; // list of items for autocomplete feature

// markup parameter not needed but leaving it in to prevent adding unnecessary changes to categoryMatcher and categoryFN
function populateItemList (itemData, markup) {
    itemList.length = 0;
    for (item in itemData) {
        itemList.push(itemData[item].name);
    }
};

function saleForm (name, price) {
    var markup = "<div data-role='fieldcontain'>" + "<label"
            + " for='item'>Item: </label>"+"<input"
            + " type='text' name='item' value='" + name + "'/> "
            + "<label for ='price'>Price: </label>" + "<input"
            + " type='number' name='price' value='" + price + "'/> "
            + "<label for ='quantity'>Qty: </label>" + "<input"
            + " type='number' name='quantity' min='1'/>" 
            + "</div>";
    return markup;
}

function inventoryForm (name) {
    var markup = "<div data-role='fieldcontain'>" + "<label"
            + " for='item'>Item: </label>" + "<input"
            + " type='text' name='item' value='" + name + "'/> "
            + "<label for ='quantity'>Qty: </label>" + "<input"
            + " type='number' name='quantity' min='1'/>"
            + "</div>";
    return markup;
}

// retrieves the item with the matching key, value element
function reverseSearch (value, key, itemData) {
    for (i in itemData) {
        if (itemData[i][key] === value) {
            return i;
        }
    };
}

// wrapper for autocomplete method
function acSearch(selector, ...theArgs) { 
    var codeString = "jQuery('" + selector + "').autocomplete({";
    theArgs.map(function (arg) {
        codeString += arg;
    });
    codeString += "})";
    return codeString;
}

function addSaleAc () {
    return  acSearch("#saleSearchField",
                     "icon:'plus',",
                     "target:$('#saleSuggestions'),",
                     "source:itemList,",
                     "minLength:1,",
                     "callback: function(e) {var $item ="
                     + " $(e.currentTarget), price ="
                     + " itemData[reverseSearch($item.text(), 'name',"
                     + " itemData)].price;"
                     + " $('#saleItemList').append(saleForm($item.text(),"
                     + " price));"
                     + " $('#saleSearchField').autocomplete('clear');}");
}

function addInventoryAc () {
    return acSearch("#inventorySearchField",
                   "icon:'plus',",
                   "target:$('#inventorySuggestions'),",
                   "source:itemList,",
                   "minLength:1,",
                   "callback: function(e) {var $item="
                    + " $(e.currentTarget); "
                    + " $('#inventoryItemList').append(inventoryForm($item.text()));"
                    + " $('#inventorySearchField').autocomplete('clear');}");
}

// creates page for either add sales or add inventory
function addRemoveList( urlObj, options, category, itemData,
                       fnList, branchName )
{
    // load appropriate parameters for autocomplete
    category === 'addSale' ? eval(addSaleAc.call(this)) :
        eval(addInventoryAc.call(this));
    
    var categoryName = urlObj.hash.replace( /.*=/, "" ),
	    pageSelector = urlObj.hash.replace( /\?.*$/, "" );

    if ( categoryName ) {
	    var $page = $( pageSelector ),
		    $header = $page.children( ":jqmData(role=header)" ),
		    $content = $page.children( ":jqmData(role=content)" ),
            markup='';

        categoryMatcher(category, itemData, markup, fnList,
                        branchName);

        // if (category === "addSale") { // <--- add customer name search
        //     $('#customerName').html("<p>Customer Name</p>");
        // }

        $header.find( "h1" ).html( categoryName );
        $page.page();
	    $content.find( ":jqmData(role=listview)" ).listview();
	    options.dataUrl = urlObj.href;
	    $.mobile.changePage( $page, options );
    }
}

function buildReceipt( receiptNumber, markup ) {
    var receipt = receipts[receiptNumber];
    markup += '<p>Receipt Number: ' + receiptNumber;
    markup += '<ul data-role="listview">';
    for (item in receipt.items ) {
        markup += '<li><div class="ui-grid-a"><span class="ui-block-a">Item: ' + receipt.items[item].name + ' x ' +
            receipt.items[item].qty + '</span><span'
            + ' class="ui-block-b" style="text-align:right">'+' Amount: ' +
            receipt.items[item].total + '</span></div>';
    }
    markup += '<li style="text-align:right">Total: ' + receipt.sales + '</li></ul>';
    return markup;
}

function showReceipt( urlObj, options, receiptNumber) {
    var pageSelector = urlObj.hash.replace( /\?.*$/, ""),
        $page = $( pageSelector),
        $header = $page.children( ":jqmData(role=header)" ),
		$content = $page.children( ":jqmData(role=content)" ),
        markup='';
    markup += buildReceipt( receiptNumber, markup );
    $header.find( "h1").html( receiptNumber);
    $content.html( markup );
    $page.page();
    $content.find( ":jqmData(role=listview)" ).listview();
    options.dataUrl = urlObj.href;
    $.mobile.changePage( $page, options);
}

// function receiptDialog( receiptNumber, markup ) {
//     markup = '<div id="receipt" data-role="dialog"'
//         + ' data-add-back-btn="true">' +
//         '<div data-role="header"><h1>' + receiptNumber + '</h1></div>'
//         + ' <div data-role="content">' + buildReceipt( receiptNumber )
//         + '</div></div>';
//     return markup;
// }



$(document).bind( "pagebeforechange", function( e, data ) {
    // refresh database
    $("#refresh").click(function () {
        getClientData();
        getReceipts(1); // <--- fix async calls
    });

    // $("#receipt").on("pagehide", function() {
    //     var that = $( this );
    //     $content = that.children(":jqmData(role=content)");
    //     $content.empty();
    //     $(that).remove();
    // });

    if ( typeof data.toPage === "string" ) {
	    var u = $.mobile.path.parseUrl( data.toPage ),
            backP = /.*=/,
            branchP = /branch?/,
            categoryP = /category?/,
            receiptP = /receipt?/,
            // if category is set to null showCategory will call branchMenu
            category = u.hash.search(categoryP) !== -1 ? u.hash.match( 
                /^.*category=(\w+)$/)[1] : null,
            fnList = (category in addFunctionList) ? addFunctionList
                : showFunctionList;
        
        if ( u.hash.search( backP ) !== -1 ) {
            // clicked on a receipt
            if ( u.hash.search( receiptP ) !== -1 ){
                var receiptNumber = u.hash.match(
                        /^.*number=(.*)$/)[1];
                // getReceipts(receiptNumber);
                showReceipt(u, data.options, receiptNumber);
                e.preventDefault();
            }
            // clicked on a branch
            else if (u.hash.search( branchP ) !== -1) {

                var branchName = u.hash.match( /^.*branch=(\w+)[?]*/
                                             )[1].toLowerCase();

                fnList === addFunctionList ? addRemoveList(u, data.options, category,
                                                           clientData.branches[branchName].items,
                                                           fnList, branchName) :
                    showCategory(u, data.options, category,
                                 clientData.branches[branchName].items, fnList,
                                 branchName);

                e.preventDefault();
            // top level menu
            } else {
                showCategory(u, data.options, category,
                             clientData.items, fnList,  null);
                e.preventDefault();
            }
        }
    }
});
