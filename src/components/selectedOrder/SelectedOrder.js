import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { Button } from '@material-ui/core';
class SelectedOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOrder:{}
    };
  } 
  acceptOrder = async () =>{//order status change to accepted
    let selectedOrder = this.state.selectedOrder
    selectedOrder.orderStatus = "accepted"
    await this.setState({selectedOrder}, ()=>{//setState Callback to send props to App.js to update the db
      this.props.updateOrderStatus(this.state.selectedOrder.id, {
        orderStatus: "accepted",
      })
    })
  }

  rejectOrder = async() =>{//order status change to rejected
    let selectedOrder = this.state.selectedOrder
    selectedOrder.orderStatus = "rejected"
    await this.setState({selectedOrder}, () =>{//setState Callback to send props to App.js to update the db
      this.props.updateOrderStatus(this.state.selectedOrder.id, {
        orderStatus: "rejected",
      })
    })    
  }

  static getDerivedStateFromProps(nextProps, prevState){//get the props(selectedOrder) and set ing the state
    return {
      selectedOrder: nextProps.selectedOrder
  };

}
  render(){
    const { orders, classes, selectedOrderIndex, selectedOrder } = this.props;
    //total price for all the items using reduce and calculating the sum and making sure of getting a numerical value. 
    //price is originall string, parse the float value and round it to the closed 2 numbers
    const totalOrderPrice = selectedOrder.items.reduce((total, item) => Number(total) + Number((parseFloat(item.itemPrice)*item.itemQty).toFixed(2)), 0);
    let createdAt = "";
    if(selectedOrder.timestamp){//convert the time stampt of firebase to Date
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
            {selectedOrder.orderStatus !== "rejected" && selectedOrder.orderStatus !== "accepted"? 
            <div className= "row" style={{display:"flex"}}>
            <Button className={classes.acceptOrderButton} variant="contained" onClick = {this.acceptOrder}>Accept</Button>
            <Button className={classes.rejectOrderButton} variant="contained" onClick = {this.rejectOrder}>Reject</Button>
            </div> : <div><Button variant="contained" disabled 
            style = {{width: "100%", opacity:0.5}}
            className= {selectedOrder.orderStatus === "rejected" ? classes.rejectOrderButton : classes.acceptOrderButton}>{selectedOrder.orderStatus}</Button></div>
             }
            
            
          </div>
        </div>
      )

      
  }
}
export default withStyles(styles)(SelectedOrders)