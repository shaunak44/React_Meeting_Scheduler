import React from'react'

const style_div ={
    backgroundColor : "lightblue",
    padding  : "10px",
    marginBottom : "10px",
    borderRadius : "6px",
    borderStyle:"solid", 
    margin:"25px",
    marginLeft:"100px",
    marginRight:"100px",    
}

const align_right = {
    float : "right",
}

function Item(props) {
    return (
        <div style={style_div}><div style={align_right}>{props.item.Description}{props.item.participants}</div>
                            <div>Time Slot :- {props.item.start_time} to {props.item.end_time}</div></div>
    )
}

export default Item