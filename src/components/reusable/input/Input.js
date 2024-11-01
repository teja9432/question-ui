import React from 'react'
import { Fragment } from 'react'
export const Input = (props) => {
    const{label ,name,type,options,fnChange,required,errormsg}=props;
    const fnGetInputControl=()=>{
    switch(type){
        case "text":
            return <input className='form-control' type={type } name={name} onChange={fnChange}/>
        case "radio":
            return <>
             {
                options.map((opt,ind)=>{
                    return <Fragment key={"frag_"+ind}><input className='form-check-input' name={name} onChange={fnChange} type={type}></input><span className='ms-2 me-3'>{opt}</span></Fragment>
                })
             }
            </>
    }
    }
  return (
    <div className='row mb-3 '>
      <div className='col-sm-5 col-lg-6 text-end'> <b>{label}{required&&<span className='text-danger'>*</span>}</b></div>:
      <div className='col-sm-3'>{fnGetInputControl()}</div>
      <div className='col-sm-4 text-start'><b className='text-danger '>{errormsg}</b></div>
       
       </div>
  )
}
