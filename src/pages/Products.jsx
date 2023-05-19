import React, { useEffect, useState } from 'react';
import Product from '../components/Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-gray-600 font-serif ml-10 mt-10'>Products</h1>
            <div className='grid grid-cols-4 justify-items-center  gap-6 p-10'>
                {products.length ===0 && <div className='text-3xl text-center' ><h1>Loading...</h1></div> }
                {products.map(pd => <Product key={pd.id} pd={pd} />)}
            </div>
        </div>

    );
}
export default Products;