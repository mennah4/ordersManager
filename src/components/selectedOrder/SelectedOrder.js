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
      selectedOrder:{}
    };
  } 
  acceptOrder = async () =>{
    let selectedOrder = this.state.selectedOrder
    selectedOrder.orderStatus = "accepted"
    await this.setState({selectedOrder}, ()=>{
      this.props.updateOrderStatus(this.state.selectedOrder.id, {
        orderStatus: "accepted",
      })
    })
    console.log("in accepted", this.state.selectedOrder)
  }

  rejectOrder = async() =>{
    let selectedOrder = this.state.selectedOrder
    selectedOrder.orderStatus = "rejected"
    await this.setState({selectedOrder}, () =>{
      this.props.updateOrderStatus(this.state.selectedOrder.id, {
        orderStatus: "rejected",
      })
    })
    console.log("in rejected", this.state.selectedOrder)
    
  }

  // componentDidUpdate(){
  //   if(this.state.selectedOrder.orderStatus !== ""){
  //     setTimeout(() => {
  //       this.props.updateOrderStatus(this.state.selectedOrder.id, {
  //         orderStatus: this.state.selectedOrder.orderStatus,
  //       })
  //   }, 10000);
      
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      selectedOrder: nextProps.selectedOrder
  };

}
  render(){
    const { orders, classes, selectedOrderIndex, selectedOrder } = this.props;
      return(<div className={classes.selectedOrderContainer}>
          {/* { selectedOrder.timestamp.toDate().toDateString()} */}
          <p>Order # {selectedOrder.id} | Placed At:</p>
          <p>Customer Name: {selectedOrder.name} </p>
          <p>Customer Email: {selectedOrder.email} </p>
          <b>Items</b>
          {selectedOrder.items.map(item =>{
              return(
                <div className= "row">
                  <p className= "col-5">{item.itemName}</p>
                  <p className= "col-3">{item.itemPrice + " x " + item.itemQty} </p>
                  <p className= "col-3">{parseFloat(item.itemPrice)*item.itemQty + " KD"}</p>
                </div>
              )
          })}
          <b>Total Ammount: KD</b>
            <Button variant="contained" color="success" onClick = {this.acceptOrder}>Accept</Button>
            <Button variant="contained" color="secondary" onClick = {this.rejectOrder}>Reject</Button>
      </div>)

      
  }
}
export default withStyles(styles)(SelectedOrders)