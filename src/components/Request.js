import React, { Component } from 'react'
import axios from 'axios'



class RequestData extends Component{
    constructor(props){
        super(props)

        this.state={
            Data : []
        }
    }

    componentDidMount(){
        axios.get('http://fathomless-shelf-5846.herokuapp.com/api/schedule?date=7/8/2019')
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    render(){
        return (
            <div>
                lsit foanlkdal
            </div>
        )
    }
}

export default RequestData