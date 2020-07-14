import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios'
import { Icon, Col, Card, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import ImageSlider from '../utils/ImageSlider';

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)

    useEffect(() => {
        
        let body = {
            skip : Skip,
            limit : Limit
        }

        getProducts(body)

    }, [])


    const getProducts = (body) => {

        axios.post('/api/product/products', body)
            .then(response => {
                if(response.data.success) {
                    if(body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)

                    }
                } else {
                    alert("상품들을 가져오는데 실패했습니다.")
                }
            })

    }


    const renderCards = Products.map((product, index) => {

        return  <Col key={index}>
                    <a href={`/product/${product._id}`}>
                        <ImageSlider images={product.images}/>
                    </a>  
                </Col>
       
    })

    return (

        <div>
            {renderCards[0]} 
        </div>
    )
}

export default LandingPage
