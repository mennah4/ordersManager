import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import OrderItem from "../orederItem/orderItem"
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orderId: null,
      ordersModal: false,
      items: [
        {
          itemName: "",
          itemQty: 0,
          itemPrice: ""
        }
      ],
      newOrder: {
        name: "",
        email: "",
        orderStatus: ""
      }
    };
    // this.createNewOrder = this.createNewOrder.bind(this)
  }

  selectOrder = (order, id) => this.props.selectOrder(order, id);//props function to select the order from the list 

  toggleCreateNewOrderModar = () => {//open order creation modal
    this.setState({
      ordersModal: true
    });
    console.log(this.state.ordersModal)
  };

  handleClose = () => {//close the order creation modal when clicking outside
    this.setState({
      ordersModal: false
    });
  };

  handleChange = async (e) => {//handle change for the primitive attributes
    let newOrder = this.state.newOrder;
    const { name, value } = e.target;
    if (name === "name" || name === "email") { newOrder[name] = value; }
    // else{newOrder.items[0][name] = value;}
    console.log(newOrder)
    await this.setState({ newOrder });
  }

  handleItemsChange = idx => e => {//handle change for the items array considering the item[idx]
    const { name, value } = e.target;
    const items = [...this.state.items];
    let newOrder = this.state.newOrder;
    items[idx][name] = value;
    newOrder.items = items;
    console.log(newOrder)
    this.setState({items, newOrder})
  }

  addNewItemToOrder = () => {//ad new order row(dafault empty)
    const item = {
      itemName: "",
      itemQty: 0,
      itemPrice: ""
    };
    this.setState({
        items:[...this.state.items, item]
    })
  }

  deleteItemFromOrder = (idx) => () =>{//delete item from the array
    const items = [...this.state.items]
    items.splice(idx, 1)
    let newOrder = this.state.newOrder;
    newOrder.items = items;
    this.setState({
        items,
        newOrder
    });
  }

  createNewOrder = () => {//submit the order 
    console.log("new order")
    this.props.createNewOrder(this.state.newOrder);
    this.setState({ ordersModal: false });
  }

  render() {
    const { orders, classes, selectedOrderIndex } = this.props;
    if (orders) {
      return (
        <div>
          <div className={classes.ordersContainer}>
            <div style={{position:"sticky"}}>
              <Button className={classes.newOrderBtn} onClick={this.toggleCreateNewOrderModar}>New Order <AddIcon style ={{marginLeft:"10px"}} /></Button>
            </div>
            <Divider style={{marginTop:"30px"}}></Divider>
            {/* Orders List contining order items component */}
            <List>
              {
                orders.map((order, _index) => {
                  return (
                    <div key={_index}>
                      <OrderItem
                        order={order}
                        _index={_index}
                        selectedOrderIndex={selectedOrderIndex}
                        selectOrder={this.selectOrder}>
                      </OrderItem>
                      <Divider></Divider>
                    </div>
                  )
                })
              }
            </List>
          </div>
          <div>
            {/* Order Placement Modal - needs to be refctored, into speperate Oreder creation Component */}
            <Modal 
              open={this.state.ordersModal}
              onClose={this.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className={classes.formContainer}>
                <h4 className={classes.title}>PLACE NEW ORDER</h4>
                <form noValidate autoComplete="off">
                  {/* Inputs for the name/email*/}
                  <div className="row"><TextField className={classes.newOrderInput} id="standard-size-small" label="Name" variant="outlined"
                    onChange={this.handleChange} name="name" /></div>
                  <div className="row"><TextField className={classes.newOrderInput} id="standard-size-small" label="Email" variant="outlined"
                    onChange={this.handleChange} name="email" /></div>
                      {/* Adding items dynamically to the array*/}
                      <Button className={classes.newItemButton} variant="contained" color="primary" disableElevation
                        onClick={this.addNewItemToOrder}>
                          Add new item to the basket 
                          <AddIcon style ={{marginLeft:"10px"}} />
                      </Button>
                      {this.state.items.map((item, idx) => {
                        return (
                          <div style={{marginBottom:"10px"}} key={idx}>
                          <TextField className={classes.itemNameInput} id="standard-size-small" label="Item Name" variant="outlined"
                            onChange={this.handleItemsChange(idx)} value={this.state.items[idx].itemName} name="itemName" />
                          <TextField className={classes.itemQtyInput} id="standard-size-small" label="Qty" variant="outlined" type="number"
                            onChange={this.handleItemsChange(idx)} value={this.state.items[idx].itemQty} name="itemQty" />
                          <TextField className={classes.itemPriceInput} id="standard-size-small" label="Price" variant="outlined"
                            onChange={this.handleItemsChange(idx)} value={this.state.items[idx].itemPrice} name="itemPrice" />
                            <Button className={classes.deleteItemButton} variant="contained" color="primary" disableElevation
                              onClick={this.deleteItemFromOrder(idx)}>
                              <DeleteIcon />
                            </Button>
                            </div>
                            
                          )
                      })}
                      <Button className={classes.orderPlacementButton} variant="contained" color="primary" disableElevation
                        onClick={this.createNewOrder}>
                        Place order
                      </Button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      )
    } else {
      return (<div></div>);
    }
  }
}
export default withStyles(styles)(Orders)