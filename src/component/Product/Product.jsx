import React, { useEffect, useState } from 'react';
import axios from "axios"
import ProductCart from './ProductCart';

const Product = ({h}) => {

    const [card, setC] = useState([])
    const [loading, setL] = useState(true)

    useEffect(() => {
        const a = async () => {
            try{
                setL(true)
                const b = await axios.get("Card.json")
                setC(b.data)
            }
            finally{
                setL(false)
            }
        }
        a();
    },[])

    if(loading) return <span className="loading loading-infinity loading-lg my-10"></span>

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {
                card.map(v => <ProductCart key={v.id} p={v} h={h}></ProductCart>)
            }
        </div>
    );
};

export default Product;