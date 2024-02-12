import React, { useState, useEffect } from 'react';
import './allproduct.css';
import ProductCard from '../card/ProductCard';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../store/productSlice';

const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 12;

  const dispatch = useDispatch()
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/products?page=${currentPage}&limit=${pageSize}`);
        if(response) {
          dispatch(setProduct(response.data.products))
          setProducts(response.data.products);
          setTotalPages(response.data.totalPages);
        }
     
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  return (
    <>
      {products.length > 0 ? (
        <>
          <div className='allproduct-container'>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div>Loading products...</div>
      )}
    </>
  );
};

export default Allproduct;
