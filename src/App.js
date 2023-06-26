import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "./components/Input";
import Footer from "./components/Footer";

function App() {
  const [addItem, setAddItem] = useState([])
  let clickHandler=(data)=>{
    setAddItem((prev)=>{
      return [...prev, data]
    });
    toast.success("Note Added");
  }
  let deleteHandler=(id)=>{
    setAddItem(addItem.filter((prevData , index) =>{
      return index !== id;
    }));
    toast.warning("Note Deleted")
  }
  return (
    <div className="flex flex-col  justify-between h-screen">
      <Header/>
      <Input clickHandler ={clickHandler}/>
      <div className="flex flex-wrap gap-6 px-1 mx-auto">
      {
        addItem.map((value, index)=>{
            return <Card key={index} id={index} title={value.title} onDelete={deleteHandler} text={value.text}/>
        })
      }
      <ToastContainer/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
