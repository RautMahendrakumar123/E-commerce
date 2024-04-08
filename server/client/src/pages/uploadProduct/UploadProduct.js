import React, { useState } from 'react'
import './upload.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'

const UploadProduct = () => {

    const [formData,setFormData]=useState({
        productname:"",
        image:"",
        desc:"",
        price:"",
        category:"",
        special:""
      })

      const navigate = useNavigate()

      const handleChnage = (e)=>{
      if(e.target.name==='image'){
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.files[0]
        }))
      }else{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
      }
      }

      const handleSubmit = async(e)=>{
        e.preventDefault()
        const formDataToSend = new FormData();
        formDataToSend.append('productname',formData.productname)
        formDataToSend.append('image',formData.image)
        formDataToSend.append('desc',formData.desc)
        formDataToSend.append('price',formData.price)
        formDataToSend.append('category',formData.category)
        formDataToSend.append('special',formData.special)
        try {
            const response = await axios.post('http://localhost:5000/api/v1/upload',formDataToSend,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            })
            if(response){
                navigate('/')
                toast.success('Product Added')
                setFormData({
                    productname:"",
                    image:"",
                    desc:"",
                    price:"",
                    category:"",
                    special:false
                })
                e.target.reset()
                console.log(response)
            }
        } catch (error) {
            toast.error('Something Went Wrong')
            console.log(error)
        }
        
      }
      
console.log(formData)
    return (
        <div className='upload-container'>
            <form className='upload-form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <input type='text' placeholder='Product Name' name='productname' value={formData.productname} onChange={handleChnage}/>
                <input type='file' placeholder=' Add a image' name='image' onChange={handleChnage}/>
                <input type='text' placeholder='desc' name='desc' value={formData.desc} onChange={handleChnage}/>
                <input type='text' placeholder='price' name='price' value={formData.price} onChange={handleChnage}/>
                <label>
                    <select name='category' value={formData.category} onChange={handleChnage}>
                        <option value='Mobile'>Mobile</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Groceries'>Groceries</option>
                        <option value='Beauty and Toy'>Beauty and Toy</option>
                        <option value='Home'>Home</option>
                        <option value='Fashion'>Fashion</option>
                    </select>
                </label>
                <label>
                    Special :-
                    <select name='special' value={formData.special} onChange={handleChnage}>
                        <option value='false'>False</option>
                        <option value='true'>True</option>
                    </select>
                </label>
                <div>
                    <Button variant="primary" type='submit'>Upload</Button>
                </div>
            </form>
        </div>
    )
}

export default UploadProduct
