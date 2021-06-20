import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles((theme) => ({
  root: {

    height:'60px',
    width:'100%',
    backgroundColor:'HoneyDew',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  table_container_header_item:{
    width:'15%',
    marginLeft:'45px',
    display:'flex',
    justifyContent:'center',
  },
  table_container_header_item_id:{
    width:'15%',
    marginLeft:'45px',
    display:'flex',
    justifyContent:'flex-start',
  },
  table_container_header_item_CustomerName:{
    width:'25%',
     
    display:'flex',
    justifyContent:'center',
    marginLeft:'45px'
  }
 
}));

const Useritemtable = ({Ordernumber,Customerid,CustomerName,Messagess}) => {
  const classes = useStyles();

  return(
  
  <div className={classes.root}>
 <div className={classes.table_container_header_item_id}>
                <h5>#{Customerid}</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>15/06/2021 - 21:49</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>15/06/2021 - 21:49</h5>
              </div>
              <div className={classes.table_container_header_item_CustomerName}>
                <h5>{CustomerName}</h5>
              </div>
              <div className={classes.table_container_header_item}>
                <h5>{Messagess}</h5>
              </div>
            
              
             
              <div className={classes.table_container_header_item}>
              <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
      
              </div>


  </div>
  );
  
};

export default Useritemtable;
