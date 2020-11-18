import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import OrderItem from "../orederItem/orderItem"
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateOrder from "../form/createOrder"
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orderId: null,
      ordersModal: false,
      newOrder: {
        name:"",
        email:"",
        items:[
          {
            itemName:"",
            itemQty:0,
            itemPrice:""
          }
        ]
      }
    };
    // this.createNewOrder = this.createNewOrder.bind(this)
  }

  selectOrder = (note, id) => this.props.selectOrder(note, id);

  toggleCreateNewOrderModar = () => {
    this.setState({
      ordersModal: true
    });
    console.log(this.state.ordersModal)
  };

  handleClose = () => {
    this.setState({
      ordersModal: false
    });
  };

  handleChange = async(e) =>{
    let newOrder = this.state.newOrder;
    const { name, value } = e.target;
    if(name === "name" || name === "email"){newOrder[name] = value;}
    else{newOrder.items[name] = value;}
    console.log(newOrder)
    await this.setState({ newOrder });
  }

  createNewOrder = () =>{
    console.log("new order")
    this.props.createNewOrder(this.state.newOrder);
    this.setState({ ordersModal: false});
  } 

  render() {
    const { orders, classes, selectedOrderIndex } = this.props;
    if (orders) {
      return (
        <div>
          <div className={classes.ordersContainer}>
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
            <Button onClick={this.toggleCreateNewOrderModar}
              className={classes.newNoteBtn} >New Order <AddCircleIcon />
            </Button>

          </div>
          <div>
            <Modal
              open={this.state.ordersModal}
              onClose={this.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >

              <div className = {classes.formContainer}>
                <b>Place a new order</b>
                <form noValidate autoComplete="off">
                  <div className="row"><TextField className={classes.newOrderInput} id="standard-size-small" label="Name" variant="outlined"
                    onChange={this.handleChange} name="name" /></div>
                  <div className="row"><TextField className={classes.newOrderInput} id="standard-size-small" label="Email" variant="outlined"
                    onChange={this.handleChange} name="email" /></div>
                  <div>
                    <TextField className={classes.itemNameInput} id="standard-size-small" label="Item Name" variant="outlined" 
                      onChange={this.handleChange} name="itemName"/>
                    <TextField className={classes.itemQtyInput} id="standard-size-small" label="Qty" variant="outlined" type="number"
                      onChange={this.handleChange} name="itemQty"/>
                    <TextField className={classes.itemPriceInput} id="standard-size-small" label="Price" variant="outlined"
                      onChange={this.handleChange} name="itemPrice"/>
                    </div>
                </form>
                <Button className = {classes.orderPlacementButton} variant="contained" color="primary" disableElevation
                  onClick={this.createNewOrder}>
                  Place order
                </Button>

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