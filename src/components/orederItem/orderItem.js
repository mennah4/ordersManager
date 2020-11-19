import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class OrderItem extends React.Component {

    selectOrder = (note, id) => this.props.selectOrder(note, id);

    render() {
        const { _index, order, classes, selectedOrderIndex } = this.props;
        //total price for all the items using reduce and calculating the sum and making sure of getting a numerical value. 
    //price is originall string, parse the float value and round it to the closed 2 numbers
    const totalOrderPrice = order.items.reduce((total, item) => Number(total) + Number((parseFloat(item.itemPrice)*item.itemQty).toFixed(2)), 0);
        return (
            <div key={_index}>
                <ListItem 
                className={classes.listItem}
                selected={selectedOrderIndex === _index}
                alignItems="flex-start">
                    <div 
                    className={classes.textSection}
                    onClick={() => this.selectOrder(order, _index)}>
                        <ListItemText primary={"#" + order.id }></ListItemText>
                        <ListItemText primary={totalOrderPrice}></ListItemText>
                        <ListItemText secondary={order.name}></ListItemText>
                    </div>
                </ListItem>

            </div>)
    }
}
export default withStyles(styles)(OrderItem)