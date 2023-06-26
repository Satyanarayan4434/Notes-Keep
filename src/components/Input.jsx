import React, { useState } from 'react';
import { BsPlusCircleFill } from "react-icons/bs";

function Input(props) {
    const [data, setData]=useState({
      title:'',
      text:'',
    });

    const inputEvent=(event)=>{
        const {name, value} = event.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        }) 
    };
   
   let addEvent=()=>{
     props.clickHandler(data);
     setData({
      title:'',
      text:'',
    }); 
   }
  return (
    <div className='flex flex-col gap-4 w-screen items-center justify-center'>
        <div className='flex flex-col border mt-16 w-[20rem] p-2 border-black rounded-md shadow-md'>
            <input  name='title' value={data.title} onChange={inputEvent} className='outline-none border-none h-8 text-lg font-mono font-bold' type='text' placeholder='Title'/>
            <textarea name='text' value={data.text} onChange={inputEvent} className='outline-none border-none font-mono opacity-80' placeholder='Message'></textarea>
        </div>
        <button  onClick={addEvent}><BsPlusCircleFill size={30}/></button>
    </div>
  )
}

export default Input