import React from 'react'
import { connect } from 'react-redux'
import store from '../store/store'

function Cart({products:{cart},dispatch}) {
    function dec(cp){
        if(cp.count===1){
            dispatch({type:'DELETE-CART-PROD',payload:cp})
        }
        dispatch({type:'DEC-CART-PROD-COUNT',payload:cp})
    }
  return (
    <div className='container'>
      <table className="table table-striped">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Count</th>
        <th>Total</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((cp,i)=>{
            return <tr>
                <td>{cp.title}</td>
                <td>{cp.price}</td>
                <td>
                     <button className="btn btn-success" onClick={()=>{dispatch({type:'INC-CART-PROD-COUNT',payload:cp})}}>+</button>
                     <b>{cp.count}</b>
                     <button className="btn btn-danger" onClick={()=>{dec(cp)}}>-</button>
                </td>
                <td>{cp.price * cp.count}</td>
                <td><button className="btn btn-dark" onClick={()=>{dispatch({type:'DELETE-CART-PROD',payload:cp})}}>Delete</button></td>
            </tr>
        })
      }
    </tbody>
  </table>
      
    </div>
  )
}

export default connect(store=>store) (Cart)
