import React, { Fragment } from 'react'
import { TextArea } from '../reusable/textarea';
import { Input } from '../reusable/input';
import { Select } from '../reusable/select';
import { inputControls } from './configuration';

export const Question = () => {
  return   <Fragment>
    <div className='mt-3'>
  {
    
    inputControls.map((obj,ind)=>{
          switch(obj.tag){
          case "input":
          return <Input {...obj}/>
          case "textarea":
            return <TextArea {...obj}/>
          case "select":
            return <Select {...obj}/>
          }
    })
   
  }
   </div>
  <button>Submit</button>
  </Fragment>
    
    

  }

