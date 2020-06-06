import React , { Component  } from "react";
import CustomerAddress from "./CustomerAddress";
import './CustomerBasic.css'
var add;
class CustomerBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAdd : false
        }
    }
    showAddress = (evt) =>{
       add =  this.props.fetch(this.props.id)
       this.setState({
           showAdd : !this.state.showAdd
       })
    } 

    render(){
        return(
            <div className = "CustomerBasic" onClick={ this.showAddress }>
                <div className="cinfo">
                    <div>Customer ID :  {this.props.id} </div> 
                    <div>Customer Name :{this.props.name}</div>
                    <div>Age : {this.props.age }</div>
                    <div>Sex : {this.props.sex }</div>
                    <div>Email : {this.props.email}</div>
                    <div> Mobile Number : {this.props.phone}</div>
                </div>
                <div className="caddress">
                 { this.state.showAdd  &&  <CustomerAddress addr = {add } />}
                </div>
            </div>
        )
    }
}
export default CustomerBasic;