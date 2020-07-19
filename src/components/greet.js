import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const export_list = []
var flag = false
var button_title = 'Slot is available'
class AddMeetingForm extends Component{

    constructor(props){
        super(props)

        this.state ={
            start_time : '00:00',
            end_time : '00:00',
            Description : "",
            currentItem :{
                start_time : '00:00',
                end_time : '00:00',
                Description : "",
            },
            itemList : [],
        }
        
    }
    handleStart = (event) =>{
        this.setState({
            start_time: event.target.value
        })
    }
    handleEnd = (event) =>{
        this.setState({
            end_time: event.target.value
        })
    }

    handleDes = (event) =>{
        this.setState({
            Description : event.target.value
        })
    }

    handleSub = (event) =>{
        event.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.Description !== ""){
            export_list.push(newItem)
            const newItems = [...this.state.itemList, newItem];
            this.setState({
                itemList : newItems,
                currentItem:{
                    start_time:"",
                    end_time:'',
                    Description:''
                }
            })
        }
    }

    handle= () =>{
        flag = false
        button_title="slot is available"
        var s = parseInt(this.state.start_time.replace(':', ''))
        var e = parseInt(this.state.end_time.replace(':', ''))
        for (var i  in export_list) {
            var s1 = parseInt(export_list[i].start_time.replace(':', ''))
            var e1 = parseInt(export_list[i].end_time.replace(':', ''))
            if((s > s1 && e < e1) || (e > s1 && e < e1) || (s > s1 && s < e1)){
                    flag = true
                    button_title="slot is unavailable (select different slot)"
            }
        }
        this.setState({
            currentItem:{
                start_time : this.state.start_time,
                end_time : this.state.end_time,
                Description : this.state.Description,
            },
        })
    }

    render() {

        const style_textbox = {
            backgroundColor : "white",
            width:"500px",
            height:"250px",
            padding : '10px',
            fontFamily : "Arial",
            marginBottom : "10px",
            borderRadius : "6px",
            borderStyle:"solid", 
            margin:"25px",
            marginLeft:"10px",
            marginRight:"10px"
        }

        const style_external = {
            backgroundColor : "lightblue",
            width:"750px",
            height:"600px",
            padding : '10px',
            fontFamily : "Arial",
            marginBottom : "10px",
            borderRadius : "6px",
            borderStyle:"solid", 
            margin:"25px",
            marginLeft:"10px",
            marginRight:"10px",
        }

        const label_style ={
            fontSize:"25px",
            fontFamily:"Verdana",
            color:"red",
            margin:"auto",
            padding:"3px",
            marginBottom:"100px",
            backgroundColor:"lightyellow",
            borderRadius:"4px",
        }

        const input_style={
            margin:"20px",
            width:"100px",
            height:"25px",
            borderRadius:"6px",
            borderStyle:"solid"
        }

        const style_button = {
            marginLeft:"25px",
            marginRight:"40px",
            width:"100px",
            borderRadius:"6px",
            borderStyle:"solid",
            padding:"5px",
            cursor:"pointer"
        }

        return (
            <center><form onSubmit={this.handleSub}>
                <h2 style={{backgroundColor:"lightyellow"}}> ADD MEETING </h2>
                <div style={style_external}>
                <div><label style={label_style}>Start time:</label></div>
                <div>
                    <input type="time" style={input_style} value={this.state.start_time} onChange={this.handleStart} min="0000" max="2359"></input>
                </div>
                <div><label style={label_style}>End time:</label></div>
                <div>
                    <input type="time" style={input_style} value={this.state.end_time} onChange={this.handleEnd} min="0000" max="2359"></input>
                </div>
                <div><label style={label_style}>Description:</label></div>
                <div>
                    <textarea type="text" placeholder="Enter the Description of meeting" style={style_textbox} value={this.state.Description} onChange={this.handleDes}></textarea>
                </div>
                <div>
                    <Link to='/React_Meeting_Scheduler'><button style={style_button} type="button">Go back</button></Link>
                    <button type="submit" style={style_button} disabled={flag} title={button_title}>Schedule</button>
                    <button onClick={this.handle} style={style_button} type="button">Save</button>
                </div>
                </div>
                
            </form></center>
            
        )
    }
}

export {AddMeetingForm, export_list}