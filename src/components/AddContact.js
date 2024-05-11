import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-toastify"
import { useNavigate} from "react-router"

const AddContact = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log(contacts);
    const [name,setName] = useState('');
    const [email,setEmail] =useState('');
    const [number,setNumber] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const checkEmail = contacts.find(contact=> contact.email == email && email)
        const checkNumber = contacts.find(contact => contact.number == number && number)
        if(!email ||!number || !name){
            return toast.warning("please fill in all the fields")
        }
        if(checkEmail){
            return toast.error("This email already exists")
        }
        if(checkNumber){
            return toast.error("This number already exists")
        }

        const data = {
            id : contacts[contacts.length -1].id +1,
            name,
            email,
            number
        }
        console.log(data)
        dispatch({type:"ADD_CONTACT",payload:data})
        toast.success("Student added successfully!");
        navigate("/")

    }
  return (
    

    <div className='container'>
         <h1 className='display-3 my-5 text-center'>
                Add Student
            </h1>   
        <div className='row'>
           
            <div className='col-md-6 shadow mx-auto p-5 mb-5'>
                   <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <input type="text" placeholder='Name' className='form-control' value={name} onChange={e=>setName(e.target.value)}></input>
                    </div>
                    <div className='form-group mb-3'>
                        <input type="text" placeholder='Email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}></input>
                    </div>
                    <div className='form-group mb-3'>
                        <input type="number" placeholder='Phone number' className='form-control' value={number} onChange={e=>setNumber(e.target.value)}></input>
                    </div>
                    <div className='form-group '>
                        <input type="submit" value="Add student" className='btn btn-block btn-dark'></input>
                    </div>
                   </form>
                </div>
        </div>
    </div>
  )
}

export default AddContact