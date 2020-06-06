import React , {Component } from 'react';
import axios from 'axios';
import CustomerBasic from '../Components/CustomerBasic';
import './CustomerList.css'
import custdetImg from '../cud.png' 
class CustomerList extends Component {
    constructor(props){
        super(props);
            this.state = {
                customers : [ ]
            }
            this.handleClick = this.handleClick.bind(this);
    }
    async handleClick(){
        const resp = await axios.get("http://localhost:5000/customers");
        this.setState({
            customers : resp.data
        })
    }
    
    fetchAddress =(sid) =>{
        let address;
         this.state.customers.map(st => {
            if(st.id === sid)  {
                address = st.address;
            } 
            return address;
         }
        )
        return address;
    }
    render(){
        const customers = this.state.customers.map( st => { 
            return <CustomerBasic 
            key = { st.id }
            id = {st.id}
            name={st.name} 
            email = {st.email} 
            phno = {st.phone}
            age = {st.age}
            sex = {st.sex}
            phone = {st.phone}
            fetch = {this.fetchAddress}
             /> 
        })
        return (
            <div className="CustomerList">
                <div className="CustomerList-sidebar">
                    <h1 className="CustomerList-title">
                        <span>Customer</span> Details
                    </h1>
                    <img  src = {custdetImg} alt="cd"/>
                    <button className="fetch"onClick={this.handleClick }>Fetch Customers</button>
                </div>
                <div className="Customer-details-row">{customers}</div>
            </div>
        )
    }
}
export default CustomerList;