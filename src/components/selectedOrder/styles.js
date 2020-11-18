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
      height: '100%',
      boxSizing: 'border-box'
    }
  });
  
  export default styles;