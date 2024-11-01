import React from 'react'

export const TextArea = (props) => {
    const {label,name,fnChange,required,errormsg} = props
  return (
<div className='row mt-3 mb-3'>
<div className='col-sm-5 col-lg-6 text-end'><b>{label}<span className='text-danger'>*</span></b></div>
<div className='col-sm-3'><textarea className='form-control' style={{display:"inline-block"}} onChange={fnChange} name={name} ></textarea></div>
<div className='col-sm-4 '><b className='text-danger '>{errormsg}</b></div>
</div>

  )
}
