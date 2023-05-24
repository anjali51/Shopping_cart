import React from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../store/actions'
import store from '../store/store'

function Countries({countries:{countries},dispatch}) {
    
    React.useEffect(()=>{
        dispatch(getAllCountries())
    },[])
  return (
    <div className='d-flex flex-wrap justify-content-between '>
        {
            countries.map((country)=>{
                return (
                <div className='w-20 m-2 border p-2'>
                     <h4>{country.name}</h4>
                </div>
            )})
        }
    </div>
        
  )
}

export default connect(store=>store)(Countries)
