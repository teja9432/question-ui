import React from 'react'

export const Select = (props) => {
    const{label ,name,options}=props
  return (
    <div className='row mb-3'>
      <div className='col-sm-6  text-end'><b>{label}</b></div>
        <div className='col-sm-2'><select name={name} className='form-control'>{
             options.map((val,ind)=>{
                 return <option key={"key_" +ind}>{val}</option>
             })
            }
        </select></div>
        <div className='col-sm-4'><b></b></div>
        

    </div>
  )
}
