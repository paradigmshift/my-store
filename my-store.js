var testData = {
    items: {
        spaghetti: {
            "name": "Spaghetti",
            "price": 20,
            "sold": 154,
            "inventory": 360
        },
        tomatoes: {
            "name": "Tomatoes",
            "price": 30,
            "sold": 252,
            "inventory": 343
        },
        oliveOil: {
            "name": "Olive Oil",
            "price": 34.5,
            "sold": 230,
            "inventory": 39
        },
        tomatoPaste: {
            "name": "Tomato Paste",
            "price":45.4,
            "sold": 103,
            "inventory": 32
        }
    },
    branches: {
        cebu: {
            "name": "Cebu",
            items: {
                spaghetti: {
                    "name": "Spaghetti",
                    "price": 20,
                    "sold": 88,
                    "inventory": 123
                },
                tomatoes: {
                    "name": "Tomatoes",
                    "price": 30,
                    "sold": 250,
                    "inventory": 104
                },
                oliveOil: {
                    "name": "Olive Oil",
                    "price": 34.5,
                    "sold": 154,
                    "inventory": 20
                },
                tomatoPaste: {
                    "name": "Tomato Paste",
                    "price":45.4,
                    "sold": 43,
                    "inventory": 3
                }
            }
        },
        manila: {
            "name": "Manila",
            items: {
                spaghetti: {
                    "name": "Spaghetti",
                    "price": 20,
                    "Sold": 102,
                    "Inventory": 80
                },
                tomatoes: {
                    "name": "Tomatoes",
                    "price": 30,
                    "sold": 250,
                    "inventory": 104
                },
                oliveOil: {
                    "name": "Olive Oil",
                    "price": 34.5,
                    "sold": 25,
                    "inventory": 10
                },
                tomatoPaste: {
                    "name": "Tomato Paste",
                    "price":45.4,
                    "sold": 36,
                    "inventory": 5
                }
            }
        },
        boracay: {
            "name": "Boracay",
            items: {
                spaghetti: {
                    "name": "Spaghetti",
                    "price": 20,
                    "sold": 45,
                    "inventory": 49
                },
                tomatoes: {
                    "name": "Tomatoes",
                    "price": 30,
                    "sold": 34,
                    "inventory": 87
                },
                oliveOil: {
                    "name": "Olive Oil",
                    "price": 34.5,
                    "sold": 5,
                    "inventory": 15
                },
                tomatoPaste: {
                    "name": "Tomato Paste",
                    "price":45.4,
                    "sold": 23,
                    "inventory": 10
                }
            }
        }
    }
};

var showFunctionList = {
    "Sales": showSales,
    "Inventory": showInventory,
    "Branches": showBranch
};

var addFunctionList = {
    "addSale": addSale,
    "addInventory": addInventory
};

var itemList = []; // list of items for autocomplete feature

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
        fn.call(this, itemData, markup);
};



function showSales (itemData, markup) {
    for (item in itemData) {
        markup += "<li>" + itemData[item].name + '<span'
            + ' class="ui-li-count">' + "PHP " + itemData[item].price + " * " +
            itemData[item].sold + " units " + " = " + "PHP "+ itemData[item].price *
            itemData[item].sold + "</span></li>";
    }
    return markup;
};

function showInventory (itemData, markup) {
    for (item in testData.items) {
        markup += "<li>" + '<div'
            + ' class="ui-grid-a"> <span class = "ui-block-a">' +
            itemData[item].name + '</span><span class = "ui-block-b" style="text-align:right">'
            + "Units left: " + "<span class = 'ui-li-count'>" +
            itemData[item].inventory + "</span> "+"</span>" + "</div></li>";
    }
    return markup;
};

function showBranch (markup) {
    for (branch in testData.branches) {
        markup += "<li>" + '<a href="#branch-items?branch=' +
        testData.branches[branch].name + '">' +
            testData.branches[branch].name + "</a>" +"</li>";
    }
    return markup;
};

function branchMenu (branchName) {
    return "<h2>Select a Category Below:</h2>" +
        "<ul data-role='listview' data-inset='true'>" +
        // View sales and inventory
        "<li><a href='#category-items?branch=" + branchName +
        "?category=Sales'>View Sales</a></li>"+
        "<li><a href='#category-items?branch=" + branchName +
        "?category=Inventory'>View Inventory</a></li>" +
        // Add sales and inventory
        "<li><a href='#modify-items?branch=" + branchName +
        "?category=addSale'>Enter a Sale</a></li>" + "<li><a"
        + " href='#modify-items?branch=" + branchName +
        "?category=addInventory'>Enter Inventory</a></li>"
        +
    "</ul>";
}

function showCategory( urlObj, options, category, itemData,
                       fnList, branchName )
{
    var categoryName = urlObj.hash.replace( /.*=/, "" ),
	    pageSelector = urlObj.hash.replace( /\?.*$/, "" );

    if ( categoryName ) {
	    var $page = $( pageSelector ),
		    $header = $page.children( ":jqmData(role=header)" ),
		    $content = $page.children( ":jqmData(role=content)" ),
            markup = "<ul data-role='listview' data-inset='true'>";

        // clicked on sales, inventory, or branches (top level or
        // branch item view)
        if (category in fnList) {
            markup += categoryMatcher(category, itemData, markup,
                                      fnList, branchName);
            markup += "</ul>";

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

function addSale (itemData, markup, branchName) {
    for (item in itemData) {
        itemList.push(itemData[item].name);
    }
    return markup;
};

function addInventory () { // <--- fill in
    
};

function saleInventoryForm (name, price) {
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

// retrieves the item with the matching key, value element
function reverseSearch (value, key, itemData) {
    for (i in itemData) {
        if (itemData[i][key] === value) {
            return i;
        }
    };
}

function addRemoveList( urlObj, options, category, itemData,
                       fnList, branchName )
{
    $("#searchField").autocomplete({
        icon: 'arrow-r', // option to specify icon
        target: $('#suggestions'), // the listview to receive results
        source: itemList, // URL return JSON data
        link: 'target.html?term=',
        // link to be attached to each result
        minLength: 1, // minimum length of search string
        transition: 'fade',// page transition, default is fade
        matchFromStart: true, // search from start, or anywhere in the string
        loadingHtml : '<li data-icon="none"><a href="#">Searching...</a></li>', // HTML to display when searching remotely
        klass: 'tinted',
        callback: function(e) {
            var $item = $(e.currentTarget),
                price = itemData[reverseSearch($item.text(), "name", itemData)].price;
            $('#itemList').append(saleInventoryForm($item.text(), price));
            $('#seaarchField').autocomplete("clear");
        }
    });
    
    var categoryName = urlObj.hash.replace( /.*=/, "" ),
	    pageSelector = urlObj.hash.replace( /\?.*$/, "" );

    if ( categoryName ) {
	    var $page = $( pageSelector ),
		    $header = $page.children( ":jqmData(role=header)" ),
		    $content = $page.children( ":jqmData(role=content)" ),
            markup='';

        categoryMatcher(category, itemData, markup, fnList,
                        branchName);

        if (category === "addSale") { // <--- add customer name search
            $('#customerName').html("<p>Customer Name</p>");
        }

        $header.find( "h1" ).html( categoryName );
        $page.page();
	    $content.find( ":jqmData(role=listview)" ).listview();
	    options.dataUrl = urlObj.href;
	    $.mobile.changePage( $page, options );
    }
}

$(document).bind( "pagebeforechange", function( e, data ) {
    
    if ( typeof data.toPage === "string" ) {
	    var u = $.mobile.path.parseUrl( data.toPage ),
            backP = /.*=/,
            branchP = /branch?/,
            categoryP = /category?/;

        var category = u.hash.search(categoryP) !== -1 ? u.hash.match(
                /^.*category=(\w+)$/)[1] : null,
            fnList = (category in addFunctionList) ? addFunctionList
                : showFunctionList;
        
        if ( u.hash.search( backP ) !== -1 ) {
            // clicked on a branch
            if (u.hash.search( branchP ) !== -1) {

                var branchName = u.hash.match( /^.*branch=(\w+)[?]*/
                                             )[1].toLowerCase();

                fnList === addFunctionList ? addRemoveList(u,
                                                           data.options,
                                                          category,
                                                           testData.branches[branchName].items,
                                                           fnList,
                                                           branchName) :
                    showCategory(u, data.options, category,
                                 testData.branches[branchName].items, fnList,
                                 branchName);

                e.preventDefault();
            // top level menu
            } else {
                showCategory(u, data.options, category,
                             testData.items, fnList,  null); // <--- create separate
                // variable for testData.items                
                e.preventDefault();
            }
        }
    }
});
