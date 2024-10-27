import React from 'react'
import { Fragment } from 'react'
export const Input = (props) => {
    const{label ,name,type,options}=props;
    const fnGetInputControl=()=>{
    switch(type){
        case "text":
            return <input className='form-control' type={type } name={name}/>
        case "radio":
            return <>
             {
                options.map((opt,ind)=>{
                    return <Fragment key={"frag_"+ind}><input  type={type}></input><span>{opt}</span></Fragment>
                })
             }
            </>
    }
    }
  return (
    <div className='row mb-3'>
      <div className='col-sm-5 col-lg-6 text-end'> <b>{label}</b></div>  
      <div className='col-sm-3'>{fnGetInputControl()}</div>
      <div className='col-sm-4'><b></b></div>
       
       </div>
  )
}
