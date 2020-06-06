import React , {Component } from 'react';
class CustomerAddress extends Component {
    render(){
        const addressesArr = this.props.addr.map(addr => {
            return <li> {addr }</li>
        })
        return (
            <div> 
                {this.props.addr.length > 0 ? <ol>Address : {addressesArr} </ol> :  <div>No Address provided for this customer</div>}
            </div>
        )
    }
}
export default CustomerAddress;