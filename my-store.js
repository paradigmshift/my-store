var phoneGapTestData = {
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
            },
            sales: {
                0001: {
                    "items": {
                        spaghetti: {
                            "name": "Spaghetti",
                            "qty": 3
                        },
                        oliveOil: {
                            "name": "Olive Oil",
                            "qty": 1
                        }
                    }
                },
                0002: {
                    "items": {
                        tomatoPaste: {
                            "name": "Tomate Paste",
                            "qty": 8
                        },
                        oliveOil: {
                            "name": "Olive Oil",
                            "qty": 8
                        },
                        tomatoes: {
                            "name": "Tomatoes",
                            "qty": 45
                        }
                    }
                },
                0003: {
                    "items": {
                        oliveOil: {
                            "name": "Olive Oil",
                            "qty": 1
                        }
                    }
                },
                0004: {
                    "items": {
                        oliveOil: {
                            "name": "Olive Oil",
                            "qty": 37
                        }
                    }
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

var receipts = {
        q0001: {
        "rnumber": "q0001",
        "items": {
            spaghetti: {
                "name": "Spaghetti",
                "qty": 3,
                "total": 150
            },
            oliveOil: {
                "name": "Olive Oil",
                "qty": 1,
                "total": 1300
            }
        },
        "sales": 1450
    },
    q0002: {
        "rnumber": "q0002",
        "items": {
            tomatoPaste: {
                "name": "Tomate Paste",
                "qty": 8,
                "total": 400
            },
            oliveOil: {
                "name": "Olive Oil",
                "qty": 8,
                "total": 3000
            },
            tomatoes: {
                "name": "Tomatoes",
                "qty": 45,
                "total": 490.86
            }
        },
        "sales": 3890.86
    },
    q0003: {
        "rnumber": "q0003",
        "items": {
            oliveOil: {
                "name": "Olive Oil",
                "qty": 1,
                "total": 450
            }
        },
        "sales": 450
    },
    q0004: {
        "rnumber": "q0004",
        "items": {
            oliveOil: {
                "name": "Olive Oil",
                "qty": 37,
                "total": 11987.5
            },
            moet: {
                "name": "Moet & Chandon",
                "qty": 15,
                "total": 23500
            }
        },
        "sales": 35487.5
    },
    q0005: {
        "rnumber": "q0005",
        "items": {
            oliveOil: {
                "name": "Olive Oil",
                "qty": 30,
                "total": 8903.5
            },
            tomatoes: {
                "name": "Tomatoes",
                "qty": 100,
                "total": 4500
            },
            tomatoPaste: {
                "name": "Tomate Paste",
                "qty": 120,
                "total": 4350.5
            },
            spaghetti: {
                "name": "Spaghetti",
                "qty": 45,
                "total": 2450
            },
        },
        "sales": 11987.5
    },
    q0006: {
        "rnumber": "q0006",
        "items": {
            moet: {
                "name": "Moet & Chandon",
                "qty": "20",
                "total": 34000
            }
        },
        "sales": 34000
    },
    q0007: {
        "rnumber": "q0007",
        "items": {
            chianti: {
                "name": "Chianti",
                "qty": 100,
                "total": 67000
            },
            merlot: {
                "name": "Merlot",
                "qty": "200",
                "total": 118000
            }
        },
        "sales": 185000
    },
    q0008: {
        "rnumber": "q0008",
        "items": {
            moet : {
                "name": "Moet & Chandon",
                "qty": 7,
                "total": 13300
            },
            merlot: {
                "name": "Merlot",
                "qty": 49,
                "total": 28910
            }
        },
        "sales": 42210
    }
};

function getClientData () {
    // $.getJSON("http://localhost:5000?callback=?", function(data) {
    //     clientData = data;
    // });
    clientData = phoneGapTestData;
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
// function acSearch(selector, ...theArgs) { // <-- experimental feature for ECMAscript 6, works only with FF
//     var codeString = "jQuery('" + selector + "').autocomplete({";
    
//     theArgs.map(function (arg) {
//         codeString += arg;
//     });
    
//     codeString += "})";
//     return codeString;
// }

function acSearch(selector) {
    var codeString = "jQuery('" + selector + "').autocomplete({";
    for (i = 1; i < arguments.length; i++) {
        codeString += arguments[i];
    }
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
    // category === 'addSale' ? eval(addSaleAc.call(this)) :
    //     eval(addInventoryAc.call(this));
    category === 'addSale' ? eval(addSaleAc()) : eval(addInventoryAc());
    
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
