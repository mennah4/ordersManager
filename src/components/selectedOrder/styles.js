const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    selectedOrderContainer: {
      height: '100vh',
      width:"calc(100vw - 320px)",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      boxSizing: 'border-box',

    },
    selectedOrderInnerContainer:{
      border:"2px solid grey",
      padding:"16px 32px",
      borderRadius:"16px"
    },
    acceptOrderButton: {
      width:"48%",
      backgroundColor: "rgb(76,167,70)",
      height:"50px",
      fontWeight:"bold",
      '&:focus': {
        backgroundColor: "rgb(76,167,70)",
      },
      '&:hover': {
        backgroundColor: "rgb(76,167,70)",
      },
      marginTop:"10px",
      color:"white",
      marginRight:"25px"
    },
    rejectOrderButton:{
      width:"48%",
      color:"white",
      backgroundColor: "rgb(220,53,69)",
      height:"50px",
      fontWeight:"bold",
      '&:focus': {
        backgroundColor: "rgb(220,53,69)",
      },
      '&:hover': {
        backgroundColor: "rgb(220,53,69)",
      },
      marginTop:"10px"
    }
  });
  
  export default styles;