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

function categoryMatcher (categoryData, markup) {
    return categoryFn(categoryData, markup);
};

function categoryFn (categoryData, markup) {
    return functionList[categoryData].call(this, markup);
};

function showSales (markup) {
    for (item in testData.items) {
        markup += "<li>" + testData.items[item].name + '<span'
            + ' class="ui-li-count">' + "PHP " + testData.items[item].price + " * " +
            testData.items[item].sold + " units " + " = " + "PHP "+ testData.items[item].price *
            testData.items[item].sold + "</span></li>";
    }
    return markup;
};

function showInventory (markup) {
    for (item in testData.items) {
        markup += "<li>" + '<div'
            + ' class="ui-grid-a"> <span class = "ui-block-a">' +
            testData.items[item].name + '</span><span class = "ui-block-b" style="text-align:right">'
            + "Units left: " + "<span class = 'ui-li-count'>" +
            testData.items[item].inventory + "</span> "+"</span>" + "</div></li>";
    }
    return markup;
};

function showBranch (markup) {
    for (branch in testData.branches) {
        markup += "<li>" + testData.branches[branch].name + "</li>";
    }
    return markup;
};

function showCategory( urlObj, options, category )
{
    var categoryName = urlObj.hash.replace( /.*category=/, "" ),
	    pageSelector = urlObj.hash.replace( /\?.*$/, "" );

    if ( categoryName ) {
	    var $page = $( pageSelector ),
		    $header = $page.children( ":jqmData(role=header)" ),
		    $content = $page.children( ":jqmData(role=content)" ),
            markup = "<ul data-role='listview' data-inset='true'>",
            items = testData.items;

        markup += categoryMatcher(category, markup);

        markup += "</ul>";
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
            backP = /.*category=/,
            category = u.hash.replace( /.*category=/, "" );
        
        if ( u.hash.search( backP ) !== -1 ) {
            showCategory(u, data.options, category);
            e.preventDefault();
        }
    }
});

