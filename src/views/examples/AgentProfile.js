import React from 'react'
import OrderHeader from "components/Headers/OrderHeader.js";
import { makeStyles } from '@material-ui/core/styles';
import Itemtable from "./ItemTable";
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
 
 
import BooksItemTable from 'views/Tables/BooksTable/BooksItemTable'
import AgentModal from 'views/Tables/AgentTable/AgentModal'

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
    justifyContent:'space-between',
    alignItems:'center',
    padding:'10px',
    '& input':{
      width:'30%',
      height:'45px',
      borderRadius:'10px',
      paddingLeft:'15px',
      border:'1px solid grey',
      fontSize:'14px'
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
  }
}));




const Users = () => {
    
 const classes = useStyles();
 
 

    return (
      <div>
        <OrderHeader />
        <div className={classes.root}>
          <div className={classes.newuser}>
        <AgentModal/>
          </div>

          <div className={classes.addnewuser}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Author" />
            <input type="text" placeholder="Category" />
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

              <div className={classes.table_container_header_item}>
                <h5>Book</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Created</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Title</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Page</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Author</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>Order</h5>
              </div>
             
              <div className={classes.table_container_header_item}>
                <h5>Actions</h5>
              </div>

              </div>
         <BooksItemTable Ordernumber={2} Customerid={1} CustomerName={'Aziz'}/>
         <BooksItemTable Ordernumber={1}  Customerid={2} CustomerName={'Yacin'}/>
         <BooksItemTable Ordernumber={6}  Customerid={3} CustomerName={'Alan'}/>
         <BooksItemTable Ordernumber={3}  Customerid={4} CustomerName={'Tina'}/>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Users
