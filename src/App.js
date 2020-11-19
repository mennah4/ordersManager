import React from 'react';
import Firebase from "../src/components/firebase/Firebase"
import CreateOrder from "../src/components/form/createOrder"
import Orders from "../src/components/orders/orders"
import SelectedOrder from "../src/components/selectedOrder/SelectedOrder"

class App extends React.Component{

  constructor(){
    super();
    this.state = {
       orders:[],
       selectedOrderIndex: null,
       selectedOrder: null,
    }
  }

  componentDidMount = () => {
    Firebase
      .firestore()
      .collection('orders') //similar to the table in relational database
      .onSnapshot(serverUpdate => { //get called whenever the collection is updated in firebase
        const orders = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(orders);
        this.setState({ orders: orders });
      });
  }

  selectOrder = (order, index) => this.setState({ selectedOrderIndex: index, selectedOrder: order });

  createNewOrder = async(newOrder) =>{
    const order = newOrder;
    console.log(order)
    const newFromDB = await Firebase
      .firestore()
      .collection('orders')
      .add({
        name: order.name,
        email: order.email,
        items: order.items,
        timestamp: Firebase.firestore.FieldValue.serverTimestamp()
      });
      const newID = newFromDB.id; //access the id for the new ceated noted to set it to selectedNote
      await this.setState({ orders: [...this.state.orders, order] });
      const newOrderIndex = this.state.orders.indexOf(this.state.orders.filter(order => order.id === newID)[0]);//return the index of the new created ordered using filter function
      this.setState({ selectedOrder: this.state.orders[newOrderIndex], selectedOrderIndex: newOrderIndex });//now the currently selected order is the latest created order 
  }

  updateOrderStatus = (id, orderObj) => {//update the order status field
      Firebase
        .firestore()
        .collection('orders')
        .doc(id)
        .update({
          orderStatus: orderObj.orderStatus,
          timestamp: Firebase.firestore.FieldValue.serverTimestamp()
        });
    }

  render(){
    const {selectedOrder, selectedOrderIndex, orders} = this.state;
    return(
      <div className = "app-container">
        <Orders selectedOrderIndex= {selectedOrderIndex}
        orders ={orders}
        selectOrder={this.selectOrder} 
        createNewOrder={this.createNewOrder}></Orders>
        {this.state.selectedOrder? 
        <SelectedOrder 
        selectedOrderIndex = {selectedOrderIndex}
        selectedOrder = {selectedOrder}
        updateOrderStatus={this.updateOrderStatus}/> : 
        <div>
          <h3>Please click an order from the list to view</h3>
        </div>}
      </div>
    )
  }
}

export default App;
