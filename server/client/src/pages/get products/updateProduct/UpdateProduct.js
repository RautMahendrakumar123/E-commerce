import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify'


const UpdateProduct = () => {
    const [formData, setFormData] = useState({
        productname: '',
        image: '',
        desc: '',
        price: '',
        category: '',
        special: '',
    })
    const  {id}  = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(`https://e-commerce-jr9j.onrender.com/api/v1/product/${id}`);
                const { productname, image, desc, price, category, special } = response.data;
                setFormData({
                    ...formData,
                    productname,
                    image,
                    desc,
                    price,
                    category,
                    special,
                });
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        getProductById();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: file,
        }));
    };
console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('productname', formData.productname);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('desc', formData.desc);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('special', formData.special);
        try {
            const response = await axios.put(`https://e-commerce-jr9j.onrender.com/api/v1/product/update/${id}`, formDataToSend);
            console.log('Product updated:', response.data);
            toast.success('product updated')
            navigate('/dashboard/getproducts')

        } catch (error) {
            toast.error('something went wrong')
            console.error('Error updating product:', error);
        }
    }

    return (
        <div className='upload-container'>
            <form className='upload-form' encType='multipart/form-data' onSubmit={handleSubmit}>
                <input type='text' placeholder='Product Name' name='productname' value={formData.productname} onChange={handleChange} />
                <input type='file' placeholder=' Add a image' name='image' onChange={handleFileChange} />
                <input type='text' placeholder='desc' name='desc' value={formData.desc} onChange={handleChange} />
                <input type='text' placeholder='price' name='price' value={formData.price} onChange={handleChange} />
                <label>
                    <select name='category' value={formData.category} onChange={handleChange}>
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
                    <select name='special' value={formData.special} onChange={handleChange}>
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

export default UpdateProduct
