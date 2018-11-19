function GroceryList(props) {
  return ( < ul className = 'groceryItemsList' > {
      props.groceryItems.map((item, index) => ( <
        li key = {
          index
        }
        onClick = {
          () => props.onRemoveGroceryItem(item)
        } > {
          item
        } < /li >
      ))
    } <
    /ul>)
  }
  class Grocery extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          groceryItemsList: [],
          groceryItem: ''
        }
        this.removeGroceryItem = this.removeGroceryItem.bind(this)
        this.addGroceryItem = this.addGroceryItem.bind(this)
        this.getItemToAdd = this.getItemToAdd.bind(this)
      }

      removeGroceryItem(groceryItemToRemove) {
        this.setState((currentState) => {
          return {
            groceryItemsList: currentState.groceryItemsList.filter((item) => item !== groceryItemToRemove)
          }
        })
      }

      addGroceryItem() {
        if (this.state.groceryItem.length > 0) {
          this.setState((currentState) => {
            return {
              groceryItemsList: currentState.groceryItemsList.concat([this.state.groceryItem]),
              groceryItem: ''
            };
          })
        }
      }

      getItemToAdd(groceryItemEvent) {
        this.setState({
          groceryItem: groceryItemEvent.target.value.toUpperCase()
        })
      }

      render() {
        return ( < div id = 'mainContainer' >
          <div id = 'inputContainer' >
          <input type = 'text'
          placeholder = 'I want to buy ....'
          name = 'groceryItem'
          value = {
            this.state.groceryItem
          }
          onChange = {
            this.getItemToAdd
          }
          / >
          <input type = "button"
          id = 'addItem'
          value = 'Add'
          name = 'Add'
          onClick = {
            this.addGroceryItem
          }
          />
          </div >
          <div id = 'itemContainer' >
          <div id="heading"> <header id="groceryItems">
            Grocery Items List
          </header> </div>
          <GroceryList groceryItems = {this.state.groceryItemsList}
          onRemoveGroceryItem = {this.removeGroceryItem}
          />
          < /div >
          </div>)
        }
      }

      ReactDOM.render( < Grocery / > , document.getElementById("root"))
