const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  newChatBtn: {
    borderRadius: '0px'
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  },
  newNoteBtn: {
    width: '100%',
    height: '35px',
    borderBottom: '1px solid black',
    borderRadius: '0px',
    backgroundColor: '#29487d',
    color: 'white',
    '&:hover': {
      backgroundColor: '#88a2ce'
    }
  },
  ordersContainer: {
    marginTop: '0px',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    float: 'left',
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  modalContainer: {
    marginTop: '0px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    float: 'center',
  },
  formContainer: {
    margin: "0 auto",
    backgroundColor:"white",
    width:"fit-content",
    padding:"50px",
    marginTop: "200px"

  },
  orderPlacementButton:{
    width:"100%",
    backgroundColor: "green",
    marginTop:"20px",
    '&:focus': {
      backgroundColor: "green",
    },
    '&:hover': {
      backgroundColor: "green",
    }
  },
  newOrderInput: {
    width: '100%',
    marginBottom: '20px',
  },
  itemNameInput:{
    width:"50%",
    marginRight:"2px"
  },
  itemQtyInput:{
    width:"22%",
    marginRight:"15px",
    marginLeft:"15px"
  },
  itemPriceInput:{
    width:"22%",
  },
  newNoteSubmitBtn: {
    width: '100%',
    backgroundColor: '#28787c',
    borderRadius: '0px',
    color: 'white'
  }
});

export default styles;