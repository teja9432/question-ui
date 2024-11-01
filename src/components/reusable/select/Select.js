import React from 'react'

export const Select = (props) => {
    const{label ,name,options,fnChange,required,errormsg}=props
  return (
    <div className='row mb-3'>
      <div className='col-sm-6  text-end'><b>{label}<span className='text-danger'>*</span></b></div>:
        <div className='col-sm-2'><select name={name} className='form-control'>
          <option>please select</option>{
             options.map((val,ind)=>{
                 return <option key={"key_" +ind} onChange={fnChange}>{val}</option>
             })
            }
        </select></div>
        <div className='col-sm-4 text-start'><b className='text-danger '>{errormsg}</b></div>
        

    </div>
  )
}
