import React from "react";
import {BsTrash} from 'react-icons/bs'

function Card(props) {
  let deleteHandler=()=>{
    props.onDelete(props.id);
  }
  return (
    <div className="relative">
      <div className="border w-[20rem] break-words p-2 rounded-md shadow-md bg-amber-200">
        <h1 className="font-mono text-xl font-bold">{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <button onClick={deleteHandler} className="absolute top-1 right-1 border bg-white p-1 rounded-full shadow-md"><BsTrash/></button>
    </div>
  );
}

export default Card;
