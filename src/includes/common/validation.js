const validation={
    Min5Char:{
        regex:/.{5,}/,
        errormsg:"Min 5 characters"
    },
    exact10digits:{
        regex:/^\d{10}$/,
        errormsg:"Exact 10 digits",
    },
    onlyalpha:{
        regex:/^[a-zA-Z]*$/,
        errormsg:"Only alphabets"
    },
    email:{
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errormsg:"Invalid email"
    },
    onlydigits:{
        regex:/^[0-9]*$/,
        errormsg:"Only digits"
    },
    specialCharNotAllowed:{
        regex:/^[a-zA-Z0-9]*$/,
        errormsg:"Special characters not allowed"
    },
    shouldNotAllowSpaces:{
        regex:/^\S*$/,
        errormsg:"Spaces not allowed"
    },
    Required:{
       regex:/./,
       errormsg:"please enter "
    },
    password:{
        regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        errormsg:"Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    }
}

export const fnValidate=(inputobj,)=>{
    inputobj.errormsg='';
    const {value,criteria}=inputobj;
    for( let i=0;i< criteria.length;i++){
        const {regex,errormsg}=validation[criteria[i]]
        console.log(regex.test(value||" "));
        if(!regex.test(value||"")){
            inputobj.errormsg=errormsg;
            console.log(inputobj.errormsg);
            break;
        }
      
        
    }
   
}
