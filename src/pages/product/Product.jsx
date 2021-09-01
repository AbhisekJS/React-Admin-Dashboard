import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import {productData} from '../../dummyData'
import Charts from '../../components/charts/Charts'
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                <Charts data={productData} dataKey="sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1604364184152-f3bd80470c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder="Apple Airpod" />
                      <label>In Stock</label>
                      <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <label>Active</label>
                      <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      
                    </div>  
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img src="https://images.unsplash.com/photo-1604364184152-f3bd80470c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" 
                          className="productUploadImg" />
                          <label for="file">
                            <Publish/>
                          </label>
                          <input type="file" id="file" style={{'display':'none'}}/>
                          </div>
                          <button className="productButton">Update</button>
                          </div>  
                </form>

            </div>
        </div>
    )
}
