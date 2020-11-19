import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class OrderItem extends React.Component {

    selectOrder = (note, id) => this.props.selectOrder(note, id);

    render() {
        const { _index, order, classes, selectedOrderIndex } = this.props;
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
                        <ListItemText primary={"3.4" + "KD"}></ListItemText>
                        <ListItemText secondary={order.name}></ListItemText>
                    </div>
                </ListItem>

            </div>)
    }
}
export default withStyles(styles)(OrderItem)