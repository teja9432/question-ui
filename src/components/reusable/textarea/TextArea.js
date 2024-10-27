import React from 'react'

export const TextArea = (props) => {
    const {label,name} = props
  return (
<div className='row mt-3 mb-3'>
  <div className='col-sm-5 col-lg-6 text-end'><b>{label}</b></div>
<div className='col-sm-3'><textarea className='form-control' name={name} ></textarea></div>
<div className='col-sm-4'><b></b></div>
</div>

  )
}
