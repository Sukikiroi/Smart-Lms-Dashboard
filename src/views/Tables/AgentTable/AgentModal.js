import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "400px",
    width: "500px",
    backgroundColor: "white",
    borderRadius: "10px",
    display: "block",
    padding: "20px",
  },

  button: {
    backgroundColor: "rgb(14, 32, 45)",
    color: "white",
    textTransform: "capitalize",
    height: "40px",
  },
  cancelsave: {
    height: "60px",
    width: "100%",
    backgroundColor: "rgb(14, 32, 45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      marginLeft: "20px",
      height: "35px",
      width: "80px",
      border: "none",
      borderRadius: "60px",
    },
  },
  form: {
    width: "100%",
    height: "260px",
 backgroundColor:'rgb(14, 32, 45)',
    display: "block",
  },
  form_item: {
    height: "60px",
    width: "100%",
    backgroundColor:'rgb(14, 32, 45)',
    marginBottom: "30px",
    marginTop: "30px",
    display: "flex",
padding:'0px 15px 0px 15px',
 
    justifyContent: "space-between",
    alignItems: "center",
    '& input':{
      width:'200px',
        border:'1px solid grey',
        height:'40px',
        borderRadius:'4px',
        paddingLeft:'20px'
    }
  },
  description:{
    height:'150px',
    width:'350px',
    borderRadius:'16px',
    border:'none',
    paddingBottom:'60px'
  },
  description_item:{
  margin:'auto',
    width: "80%",
    backgroundColor:'rgb(14, 32, 45)',
    marginBottom: "30px",
    marginTop: "30px",
    display: "flex",
    padding:'0px 25px 0px 15px',
    justifyContent: "space-between",
    alignItems: "center",
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        New Agent
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3>New Agent</h3>
            <div className={classes.form}>
           <div  className={classes.form_item}>
             <input type='text' placeholder='Full Name'/>
             <input type='text' placeholder='Email'/>
             </div> 
           <div  className={classes.form_item}>
           <input type='text' placeholder='Password'/>
           <input type='text' placeholder='Confirm Password'/>
             </div> 
          
           
            </div>
            <div className={classes.cancelsave}>
              <button  onClick={handleClose}>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
