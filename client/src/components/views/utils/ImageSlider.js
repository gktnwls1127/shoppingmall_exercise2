import React from 'react'
import { Carousel, Typography } from 'antd'
import {ArrowDownOutlined} from '@ant-design/icons'
import './ImageSlider.css'

const { Title } = Typography;

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay effect="fade">
                    {props.images.map((image, index) => (
                        <div key={index}>
                            <img style={{
                                background:
                                    `linear-gradient(to bottom, rgba(0,0,0,0)
                                39%,rgba(0,0,0,0)
                                41%,rgba(0,0,0,0.65)
                                100%),
                                url('${props.image}'), #1c1c1c`,
                                height: '800px',
                                backgroundSize: '100%, cover',
                                backgroundPosition: 'center, center',
                                width: '100%',
                                position: 'relative'
                            }}
                                src={`http://localhost:5000/${image}`}/>
                            <div>
                                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '15rem', marginLeft: '15rem' }} >
                                    <Title style={{ color: 'white' }} level={5} > 여름 옷장 고민끝! </Title>
                                    <p style={{ color: 'white', fontSize: '1rem' }}>올 여름 옷장고민을 멈춰줄 컬렉션 ~70%</p>
                                </div>
                            </div>
                            
                            <button className="ban_button">
                                <span class="ban_scroll_text"color="#1B1D1F" font-weight="normal">SCORLL</span>
                                <div className="ban_scroll_circle" height="64px" width="64px" display="flex">
                                <ArrowDownOutlined style={{size : '24px'}}/>
                                </div> 
                        </button>
                        </div>
                    ))}
              </Carousel>
        </div>
    )
}

export default ImageSlider
