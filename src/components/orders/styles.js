const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100vh)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black',
  },
  newOrderBtn: {
    position:"sticky",
    top:10,
    left:10,
    right:10,
    marginTop: "25px",
    width: "260px",
    height: '50px',
    borderBottom: '1px solid black',
    borderRadius: '16px',
    backgroundColor: '#29487d',
    color: 'white',
    fontSize:"16px",
    '&:hover': {
      backgroundColor: '#29487d',
      opacity:0.75
    }
  },
  ordersContainer: {
    marginTop: '0px',
    width: '300px',
    height: '100vh',
    boxSizing: 'border-box',
    float: 'left',
    overflowY: 'scroll',
    overflowX: 'hidden',
    marginTop: "-20px"
  },
  modalContainer: {
    marginTop: '0px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    float: 'center',
    border: "none",
    '&:focus': {
      border: "none",
    },
    '&:hover': {
      border: "none",
    }
    
  },
  formContainer: {
    margin: "auto",
    marginTop:"100px",
    padding:"20px 50px",
    backgroundColor:"white",
    width:"fit-content",
    maxHeight:"420px",
    overflow:"scroll",
    border: "none",
    '&:focus': {
      border: "none",
    },
    '&:hover': {
      border: "none",
    }
  },
  orderPlacementButton:{
    width:"100%",
    backgroundColor: "rgba(76,167,70,0.75)",
    height:"50px",
    fontWeight:"bold",
    '&:focus': {
      backgroundColor: "rgba(76,167,70,0.5)",
    },
    '&:hover': {
      backgroundColor: "rgba(76,167,70,0.5)",
    },
    marginTop:"10px"
  },
  newItemButton:{
    width:"100%",
    backgroundColor: "lightgrey",
    color:"black",
    height:"50px",
    '&:focus': {
      backgroundColor: "lightgrey",
    },
    '&:hover': {
      backgroundColor: "lightgrey",
    },
    marginBottom:"1.3rem"
  },
  deleteItemButton:{
    width:"fit-content",
    backgroundColor: "red",
    '&:focus': {
      backgroundColor: "red",
    },
    '&:hover': {
      backgroundColor: "red",
    },
    marginLeft:"10px",
    paddingRight:"1px",
    paddingLeft:"1px",
    height:"55px"
  },
  newOrderInput: {
    width: '100%',
    marginBottom: '20px',
  },
  itemNameInput:{
    width:"45%",
    marginRight:"2px"
  },
  itemQtyInput:{
    width:"20%",
    marginRight:"10px",
    marginLeft:"10px"
  },
  itemPriceInput:{
    width:"20%",
  },
  title:{
    marginTop:0
  }

});

export default styles;