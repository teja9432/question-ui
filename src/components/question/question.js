import React, { Fragment, useState } from 'react'
import { TextArea } from '../reusable/textarea';
import { Input } from '../reusable/input';
import { Select } from '../reusable/select';
import { inputControls } from './configuration';
import { fnValidate } from '@/includes/common/validation';
export const Question = () => {
 const [input,setInput]=useState(inputControls)
  const fnChange=(eve)=>{
    const {value,name}=eve.target;
    const _input=[...input];
    let _inputobj=_input.find((obj)=>obj.name===name);
    _inputobj.value=value;
    if(_inputobj.required){
       fnValidate(_inputobj);
       setInput(_input);
       
    }
  }

  const fnSubmit=()=>{
    const _input=[...input];
    _input.forEach((obj)=>{
      if(obj.required){
        fnValidate(obj);
      }
    
    });
    const isInValid=_input.some((obj)=>obj.errormsg);
    if(isInValid){
      setInput(_input);
      return;
    }
    
  alert("send request")
}
  return   <Fragment>
    <div className='mt-3'>
  {
    
    input.map((obj,ind)=>{
      const attr={...obj,fnChange };
          switch(obj.tag){
          case "input":
          return <Input key={"key_"+ind}{...attr}/>
          case "textarea":
            return <TextArea key={"key_"+ind} {...attr}/>
          case "select":
            return <Select key={"key_"+ind} {...attr}/>
          }
    })
   
  }
   </div>
  <div className='row'>
    <div className='offset-6 col-sm-6'><button onClick={fnSubmit} className='btn btn-secondary text-white'>Submit</button></div>
  </div>
    
  </Fragment>
    
    

  }

