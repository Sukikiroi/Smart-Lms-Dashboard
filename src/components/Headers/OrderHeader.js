import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
 height:'150px',
 backgroundColor:'#172b4d '
  },
 
}));
const Orderheader = () => {
    const classes = useStyles();
    return (
        <div   className={classes.root} >
            
        </div>
    )
}

export default Orderheader
