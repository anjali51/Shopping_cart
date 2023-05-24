import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
    console.log(props)
    function inc(){
        props.dispatch({type:'INCREMENT'}) //this object goes to the reducer as a second parameter
    }
    function dec(){
        props.dispatch({type:'DECREMENT'})
    }
    function reset(){
        props.dispatch({type:'RESET'})
    }
  return (
    <div className='betterview'>
      <h1>Counter:{props.counter.count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default connect((store)=>{return store})(Counter)
