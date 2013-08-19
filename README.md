# myStore documentation

UI for the myStore program. 

### Languages:
- HTML5
- CSS3
- JavaScript

### Dependencies:
- JQ Mobile
- [autoComplete.js](https://github.com/commadelimited/autoComplete.js)

#### *function* categoryMatcher <- category(string), items(object literal), markup(string), functionList(hash)
Calls appropriate function according to `category`. Matches `category` with `functionList` to determine appropriate function.

#### *function* categoryFn <- function, category(string), items(object literal), markup(string)
Calls `function` with `markup` and `items` as arguments, or just `markup` in the case that `category` is equal to "Branches".

#### *function* showSales <- items(string), markup(string)
Appends an HTML list of `items` with number of units sold and total amount of sales to `markup`.

#### *function* showInventory <- items(string), markup(string) 
Appends an HTML list of `items` with number of units left in inventory to `markup`.

#### *function* showBranch <- markup(string)
Appends an HTML list of branches to `markup`.

#### *function* branchMenu <- branchName(string)
Creates a category list similar to the top-level list of Sales and Inventory with `branchName` as the branch in the anchor information. Used to identify which item data from which branch to display.

#### *function* showCategory <- urlObj, options, category(string), items(object literal)
Calls the appropriate page (`data-role=page`) from the HTML file and builds the markup that is injected to the page.

#### *hash* functionList
Hash containing a list of functions to be called by `categoryMatcher`, acts as an index.