import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import OrderItem from "../orederItem/orderItem"
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';

class SelectedOrders extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  } 
  render(){
    const { orders, classes, selectedOrderIndex, selectedOrder } = this.props;
    const createdAt = new Date(selectedOrder.timestamp.seconds*1000)
      return(<div className={classes.selectedOrderContainer}>

          <p>Order # {selectedOrder.id} | Placed At:{ selectedOrder.timestamp.toDate().toDateString()}</p>
          <p>Customer Name: {selectedOrder.name} </p>
          <p>Customer Email: {selectedOrder.email} </p>
          <b>Items</b>
          {selectedOrder.items.map(item =>{
              return(
                <div className= "row">
                  <p className= "col-5">{item.itemName}</p>
                  <p className= "col-3">{item.itemPrice + " x " + item.itemQty} </p>
                  <p className= "col-3">{parseInt(item.itemPrice)*item.itemQty + " KD"}</p>
                </div>
              )
          })}
          <b>Total Ammount: KD</b>
            <Button variant="contained" color="success">Accept</Button>
            <Button variant="contained" color="secondary">Reject</Button>
      </div>)

      
  }
}
export default withStyles(styles)(SelectedOrders)