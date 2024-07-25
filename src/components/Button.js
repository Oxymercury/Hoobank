import React from 'react'



const Button = (props)=>{
    return (
       <div>
          <button className=' p-4 rounded-xl md:text-xl md:p-4  bg-gradient-to-r from-[#DEF9FA] to-[#33BBCF]'>{props.value}</button>
       </div>
    );
} 

export default Button;