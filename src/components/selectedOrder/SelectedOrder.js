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

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      selectedOrder: nextProps.selectedOrder
  };

}
  render(){
    const { orders, classes, selectedOrderIndex, selectedOrder } = this.props;
    const totalOrderPrice = selectedOrder.items.reduce((total, item) => Number(total) + Number((parseFloat(item.itemPrice)*item.itemQty).toFixed(2)), 0);
    let createdAt = "";
    if(selectedOrder.timestamp){
      createdAt = selectedOrder.timestamp.toDate().toDateString()
    }else{createdAt = "dd/mm/yyyy"}
    
      return(
        <div className={classes.selectedOrderContainer}>
          <div className={classes.selectedOrderInnerContainer}>
          <b>Order # {selectedOrder.id}</b>
          <p>Placed At: {createdAt}</p>
          <p>Customer Name: {selectedOrder.name} </p>
          <p>Customer Email: {selectedOrder.email} </p>
          <b>Items</b>
          {selectedOrder.items.map(item =>{
              return(
                <div className= "row" style={{display:"flex"}}>
                  <p className= "col-5" style={{width:"40%"}}>{item.itemName}</p>
                  <p className= "col-3" style={{width:"30%"}}>{item.itemPrice + " x " + item.itemQty} </p>
                  <p className= "col-3" style={{width:"30%"}}>{(parseFloat(item.itemPrice)*item.itemQty).toFixed(2) + " KD"}</p>
                </div>
              )
          })}
            <h4>{"Total ammount: " + totalOrderPrice + " KD"}</h4>

            <div className= "row" style={{display:"flex"}}>
            <Button className={classes.acceptOrderButton} variant="contained" onClick = {this.acceptOrder}>Accept</Button>
            <Button className={classes.rejectOrderButton} variant="contained" onClick = {this.rejectOrder}>Reject</Button>
            </div>
            
          </div>
        </div>
      )

      
  }
}
export default withStyles(styles)(SelectedOrders)