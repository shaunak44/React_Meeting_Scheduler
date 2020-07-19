import React, {Component, useState} from 'react'
import ReactTable from "react-table"
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import {export_list} from './greet'
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import Item from './item'
//import RequestData from './Request'

var SelctedDate = ''

class MeetingEle extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate: ''
        }
    }

    handleChange = (date) => {
        SelctedDate = String(date).slice(4, 16)
        //window.location.reload(false)
        this.setState({
            startDate: date
        })
        
        
    }

    handleAdd = () =>{
        
            console.log(this.state.startDate);
        
    } 

    render(){

    const style_div ={
        backgroundColor : "lightblue",
        padding  : "10px",
        marginBottom : "10px",
        borderRadius : "6px",
        fontSize:"20px",
        margin:"25px",
        height:"25px",
        width:"300px",
         
    }
        
    const align_left = {
        float : "left",
    }
    const align_right = {
        float : "right",
    }
        
    const style_button={
        marginLeft:"25px",
        marginRight:"40px",
        width:"100px",
        borderRadius:"6px",
        borderStyle:"solid",
        padding:"5px"
    } 
    
    const item = export_list
    const itemList = item.map(item => <Item item={item} key={item.Description}></Item>)
    return (  
        
        <div>
            <div>
                <center><h1 style={{backgroundColor:"lightyellow"}}>MEETING SCHEDULER</h1></center>
            </div>
            <center><div style={{margin:"25px", backgroundColor:"lightyellow", width:"200px", height:"30px", 
                padding:"5px",borderStyle:"solid", borderRadius:"5px" }}><DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
              value={this.state.startDate }
              placeholderText="Select the date"
              minDate={new Date()}
            /></div></center>
            <center><b><div style={style_div}>Date : {SelctedDate}</div></b></center>
           {itemList}
           <Link to="/Greet"><center><button style={style_button} onClick={this.handleAdd}>Add Meeting</button></center></Link>
           {/*<RequestData></RequestData>*/}
        </div>        
   )}  
}

export default MeetingEle