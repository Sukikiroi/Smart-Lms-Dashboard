import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch'
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: "600px",
    width: "800px",
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
    height: "460px",
 backgroundColor:'rgb(14, 32, 45)',
    display: "block",
  },
  form_item: {
    height: "60px",
    width: "80%",
    backgroundColor:'rgb(14, 32, 45)',
    marginBottom: "30px",
    marginTop: "30px",
    display: "flex",
padding:'0px 15px 0px 15px',
    justifyContent: "space-between",
    alignItems: "center",
    '& input':{
      width:'250px',
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
   const [name, setname] = useState('aaa')
   const [title, settitle] = useState('aaaa')
   const [subtitle, setsubtitle] = useState('aaa')
   const [isbn, setmeisbn] = useState('aaaa')
   const [Description, setDescription] = useState('aaa')
   const [pictur_url, setpictur_url] = useState('aaaa')

  const createbook =(title,subtitle,isbn,Description,pictur_url)=>{
    axios.post(`http://127.0.0.1:8000/Bookcreate`,  {title:title,subtitle:subtitle,isbn:isbn,description:Description,pictur_url:pictur_url} )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        New Book
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
            <h3>New Book</h3>
            <div className={classes.form}>
           <div  className={classes.form_item}>
             <input type='text' placeholder=' Name'  />
             <input type='text' placeholder='Title' onChange={event => settitle(event.target.value)} />
             </div> 
           <div  className={classes.form_item}>
           <input type='text' placeholder='Subtitle' onChange={event => setsubtitle(event.target.value)}/>
           <input type='text' placeholder='Author' onChange={event => setmeisbn(event.target.value)}/>
             </div> 
           <div  className={classes.form_item}>
           <input type='text' placeholder='Date Released' onChange={event => setname(event.target.value)}/>
           <input type='text' placeholder='Book picture' onChange={event => setpictur_url(event.target.value)}/>
             </div> 
           <div  className={classes.description_item}>
           <input type='text' placeholder='Description'  onChange={event => setDescription(event.target.value)}  className={classes.description}/>
             
             </div> 
           
            </div>
            <div className={classes.cancelsave}>
              <button  onClick={handleClose}>Cancel</button>
              <button onClick={()=>createbook(title,subtitle,isbn,Description,pictur_url)}>Save</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
