import React ,{useState,useEffect} from 'react'
import OrderHeader from "components/Headers/OrderHeader.js";
import { makeStyles } from '@material-ui/core/styles';
import Itemtable from "./ItemTable";
import axios from 'axios'
import Button from '@material-ui/core/Button';
 import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  import AddIcon from '@material-ui/icons/Add';
 
 
import MessageItemTable from 'views/Tables/MessagesTable/MessageItemTable'
import BooksModal from 'views/Tables/BooksTable/BooksModal'
  const useStyles = makeStyles((theme) => ({
  root: {
 height:'600px',
 width:'100%',
 backgroundColor:'HoneyDew',
 display:'block',
 padding:'10px'
  },
  addnewuser:{
    backgroundColor:'white',
    height:'170px',
    width:'100%',
    marginBottom:'15px',
    borderRadius:'10px',
    boxShadow:' 0px 8px 15px rgba(0, 0, 0, 0.1)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px',
    '& input':{
      width:'30%',
      height:'45px',
      borderRadius:'10px',
      paddingLeft:'15px',
      border:'1px solid grey',
      fontSize:'14px'
    },
    '& button':{
      marginLeft:'30px',
      height:'45px',
      width:'10%',
      borderRadius:'16px',
      backgroundColor:'yellowgreen',
      border:'none',
      color:'white'
    }
  },
  table:{
    backgroundColor:'white',
    borderRadius:'10px',
    height:'400px',
    width:'100%',
    boxShadow:' 0px 8px 15px rgba(0, 0, 0, 0.1)',
    display:'block'
  },
  newuser:{
    height:'50px',
    width:'100%',
    display:'flex',
    justifyContent:'flex-end',
    padding:'10px',
    marginBottom:'20px'
  },
  button:{
    backgroundColor:'rgb(14, 32, 45)',
    color:'white',
    textTransform:'capitalize',
    height:'40px'
  },
  resultas:{
    height:'50px',
    width:'100%',
    backgroundColor:'white',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:'20px'
  },
  result:{
    height:'30px',
    width:'150px',
    backgroundColor:'Gainsboro',
    borderRadius:'60px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

    fontSize:'14px',
    '& strong':{
      paddingLeft:'5px',
      paddingRight:'5px',
    }
   

  },
  table_container:{
    height:'300px',
    width:'100%',
    backgroundColor:'white',
    display:'block'
  },
  table_container_header:{
    height:'60px',
    width:'100%',
    backgroundColor:'rgb(14, 32, 45)',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:'10px'
  },
  table_container_header_item:{
    width:'15%',
  
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '& h5':{
      fontSize:'14px',
      color:'white'
    }
  },
  table_container_header_item_id:{
    width:'15%',
  
    display:'flex',
    justifyContent:'flex-start',
    paddingLeft:'40px',
    alignItems:'center',
    '& h5':{
      fontSize:'14px',
      color:'white'
    }
  }
}));




const Users = () => {
    
 const classes = useStyles();
 const [messages, setmessages] = useState([])
  
 useEffect(() => {
 
   // this is only executed once
   axios.get(`http://127.0.0.1:8000/Messages`)
   .then(res => {
     const messages = res.data;
     setmessages(messages)
      console.log(messages)
   
   })
 }, [])
 

    return (
      <div>
        <OrderHeader />
        <div className={classes.root}>
          <div className={classes.newuser}>
       
          </div>

          <div className={classes.addnewuser}>
            <input type="text" placeholder="Student" />
            <button>Search</button>
           
          </div>

          <div className={classes.table}>
            <div className={classes.resultas}>
              <div className={classes.result}>
                {" "}
                <strong>1-1</strong> of <strong>1</strong> Result
              </div>
            </div>
            <div className={classes.table_container}>
              <div className={classes.table_container_header}>

              <div className={classes.table_container_header_item_id}>
                <h5>id</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Created</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Student</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Message</h5>
              </div>
              
              
             
              <div className={classes.table_container_header_item}>
                <h5>Actions</h5>
              </div>

              </div>
              {messages.map((message) => (
        <div  >   <MessageItemTable Ordernumber={2} Customerid={1} CustomerName={'Aziz'} Messagess={message.message}/></div>
      ))}
        
         
            </div>
          </div>
        </div>
      </div>
    );
}

export default Users
