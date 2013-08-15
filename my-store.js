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
                    "sold": 102,
                    "inventory": 80
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

var functionList = {
    "Sales": showSales,
    "Inventory": showInventory,
    "Branches": showBranch
};

function categoryMatcher (categoryData, itemData, markup, fnList) {
    var fn = fnList[categoryData];
    return categoryFn(fn, categoryData, itemData, markup);
};

function categoryFn (fn, categoryData, itemData, markup) {
    if (categoryData === 'Branches') {
        return fn.call(this, markup);
    } 
    return fn.call(this, itemData,  markup);
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
                "<li><a href='#category-items?branch=" + branchName +
                "?category=Sales'>Sales</a></li>"+
                "<li><a href='#category-items?branch=" + branchName +
                "?category=Inventory'>Inventory</a></li>" +
                "</ul>";
}

function showCategory( urlObj, options, category, itemData )
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
        if (category in functionList) {
            markup += categoryMatcher(category,itemData, markup, functionList);
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

$(document).bind( "pagebeforechange", function( e, data ) {

    if ( typeof data.toPage === "string" ) {
	    var u = $.mobile.path.parseUrl( data.toPage ),
            backP = /.*=/,
            branchP = /branch?/,
            categoryP = /category?/;

        var category = u.hash.search(categoryP) !== -1 ? u.hash.match(
                /^.*category=(\w+)$/)[1] : null;
        
        if ( u.hash.search( backP ) !== -1 ) {
            // clicked on a branch
            if (u.hash.search( branchP ) !== -1) {

                var branchName = u.hash.match( /^.*branch=(\w+)[?]*/ )[1];
                showCategory(u, data.options, category, testData.branches[branchName.toLowerCase()].items);
                e.preventDefault();
            // top level menu
            } else {
                showCategory(u, data.options, category,
                             testData.items); // <--- create separate
                // variable for testData.items                
                e.preventDefault();
            }
        }
    }
});





