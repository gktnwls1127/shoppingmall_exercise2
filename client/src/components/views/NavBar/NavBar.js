import React, { useState, useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import axios from 'axios'
import SearchFeature from './Sections/SearchFeature';

function NavBar() {
  const [visible, setVisible] = useState(false)
  const [Products, setProducts] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState(0)
  const [Filters, setFilters] = useState({
    continents: [],
    price: []
})
  const [SearchTerm, setSearchTerm] = useState("")

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
                setPostSize(response.data.postSize)
            } else {
                alert("상품들을 가져오는데 실패했습니다.")
            }
        })

}

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)


    let body ={
        skip : 0,
        limit: Limit,
        filters : Filters,
        searchTerm : newSearchTerm
    }

    setSkip(0)
    setSearchTerm(newSearchTerm)
    getProducts(body)
}

  return (
      <nav className="menu-wrapper" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
        <div className="menu__logo">
          <a href="/">StyleShare</a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-center', margin: '1rem auto'}}>
                <SearchFeature 
                    refreshFunction={updateSearchTerm}
                />
            </div>
          <div className="menu_right">
            <RightMenu mode="horizontal" />
          </div>
          {/* <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer> */}
        </div>
      </nav>
  )
}

export default NavBar