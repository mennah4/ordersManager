import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

class CreateOrder extends React.Component {
  static defaultProps = {
		ordersModal: false
	};
  constructor() {
    super();
    this.state = {
      ordersModal: false
    };
  } 
  static getDerivedStateFromProps(nextProps) {	
		return {
			ordersModal: nextProps.ordersModal,
		};
  }
  
  toggle = () => {
    console.log(this.props.ordersModal)
		this.props.toggle();
  };
  
  render(){
      const { classes } = this.props;
      return(<Modal
        open={this.state.ordersModal}
        toggle={this.toggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </Modal>)
  }
}
export default withStyles(styles)(CreateOrder)