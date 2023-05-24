import React, {useState} from 'react'
import { connect } from 'react-redux'

function Todolist({dispatch,todolist:{todos}}) {
    const [newtodo, setnewtodo]=useState('')
    function addTodo(){
        dispatch({type:'ADDTODO',payload:newtodo})
    }
  return (
    <div className='betterview'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
      <button onClick={addTodo}>Add Todo</button>
      {
        todos.map((t)=>{
            return <li>{t}</li>
        })
      }
    </div>
  )
}

export default connect((store)=> { return store})(Todolist)
