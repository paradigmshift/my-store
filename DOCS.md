# myStore documentation

UI for the myStore program. 

### Languages:
- HTML5
- CSS3
- JavaScript
- Python (for the json server, development stage only)

### Dependencies:
- jQuery
- jQ Mobile
- [autoComplete.js](https://github.com/commadelimited/autoComplete.js)

#### *global variable* clientData
Top-level variable containing the queried customer's data
********************
#### *global variable* showFunctionList
Object (dictionaries/associated lists in other languages) containing a list of functions (view item functions) to be called by `categoryMatcher`, acts as an index.
********************
#### *global variable* addFunctionList
Object containing a list of functions (add item functions) to be called by `categoryMatcher`, acts as index.
********************
#### *global variable* itemList
Array (lists in other languages) that acts as a source for autocomplete. It is filled on demand everytime the user accesses the link for adding inventory or sales.
********************
#### *function* categoryMatcher 
**categoryMatcher** *category(string) items(object) markup(string) functionList(array) => function*

Calls appropriate function (via `categoryFN`) according to `category`.
********************
#### *function* categoryFn 
**categoryFN** *function category(string) items(object) markup(string) => function* 

Calls `function` with `markup` and `items` as arguments, or just `markup` in the case that `category` is equal to "Branches".
********************
#### *function* showSales 
**showSales** *items(string) markup(string) => html string*

Appends an HTML list of `items` with number of units sold and total amount of sales to `markup`.
********************
#### *function* showInventory 
**showInventory** *items(string) markup(string) => html string*

Appends an HTML list of `items` with number of units left in inventory to `markup`.
********************
#### *function* showBranch 
**showBranch** *markup(string) => html string*

Appends an HTML list of branches to `markup`.
********************
#### *function* branchMenu
**branchMenu** *branchName(string) => html string*

Creates a category list similar to the top-level list of Sales and Inventory with `branchName` as the branch in the anchor information. Used to identify which item data from which branch to display.
********************
#### *function* showCategory 
**showCategory** *urlObj options category(string) items(object) => html page*

Calls the appropriate page (`data-role=page`) from the HTML file and builds the markup that is injected to the page (view item pages).
********************
#### *function* populateItemList
**populateItemList** *items(object)*

Populates itemList with `items`.
********************
#### *function* saleForm
**saleForm** *name(string) price(float) => html string*

Creates a sales form and fills the fields with the item name and price.
********************
#### *function* inventoryForm
**inventoryForm** *name(string) => html string*

Creates an inventory form and fills the field with the item name.
********************
#### *function* reverseSearch 
**reverseSearch** *value(string) key(string) items(object) => object*

Retrieves an object from `items` by matching the object's key with a known value.
********************
#### *function* acSearch
**acSearch** *jQuery-selector(string) options(strings) => autocomplete string*

Creates a string containing an autocomplete method call on the jQuery selector, string is to be eval-ed.
********************
#### *function* addSaleAc
**addSaleAc**

Calls `acSearch` with options for the add sales page.
********************
#### *function* addInventoryAc
**addInventoryAc**

Calls `acSearch` with options for the add inventory page.
********************
#### *function* addRemoveList
**addRemoveList** *urlObj options category(string) items(object) functionList(object) branchName(string) => html page*

Calls the appropriate page (`data-role=page`) from the HTML file and builds the markup that is injected to the page (add item pages).
********************
#### *function* $(document).bind("pagebeforechange", function...
Responsible for catching events in all pages and responding accordingly. Calls `showCategory` or `addRemoveList` according to which link is clicked by the user.
