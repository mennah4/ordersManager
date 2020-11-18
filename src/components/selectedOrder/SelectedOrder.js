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

      return(<div className={classes.selectedOrderContainer}>

          <p>Order # {selectedOrder.id} | Placed At:</p>
          <p>Customer Name: {selectedOrder.name} </p>
          <p>Customer Email: {selectedOrder.email} </p>
          <b>Items</b>
          {selectedOrder.items.map(item =>{
              return(<p>Item Name: {item.itemName}</p>)
          })}
          <b>Total Ammount: KD</b>
            <Button variant="contained" color="success">Accept</Button>
            <Button variant="contained" color="secondary">Reject</Button>
      </div>)

      
  }
}
export default withStyles(styles)(SelectedOrders)