import React, {useEffect, useState} from 'react';
// import axios from 'axios';
import './ProductDetail.css';
import {useSelector, useDispatch} from 'react-redux';
import {detailProduct, addCart} from '../actions/product.js';
import {useHistory} from 'react-router-dom';
// import products from '../data.js';

function ProductDetail(props) {
    // Route path='/product/:id'

    // const product = products.find(p => p._id === props.match.params.id);
    // const [product, setProduct] = useState({});
    const productDetail = useSelector(state => state.productDetail);
    const {product, loading, error} = productDetail;
    const [num, setNum] = useState(1)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // const fetchData = async (id) => {
        // const {data} = await axios.get(`/api/product/${id}`);
        // setProduct(data);
        // }
        // fetchData(props.match.params.id);
        dispatch(detailProduct(props.match.params.id));
        return() => {};
    }, []);

    const toCart = () => {
        console.log(product);
        dispatch(addCart(product, num))
        history.push(`/cartScreen`);

    }

    return loading ? <div> กำลัง load อยู่นะครับ </div> :
          error? <div className="error"> ERRRR {error} </div > : (<div>
        <div className="detail">
            <div className="detail-image">
                <img src={
                    product.url
                }/>
            </div>
            <div className="detail-info">
                <ul>
                    <li>
                        <h4> {
                            product.name
                        }</h4>
                    </li>
                    <li> {
                        product.stars
                    }
                        จากทั้งหมด 100 reviews</li>
                    <li>Price:
                        <b>฿{
                            product.price
                        }</b>
                    </li>
                    <li>Brand:
                        <i> {
                            product.brand
                        }</i>
                    </li>
                </ul>
            </div>
            <div className="detail-action">
                <ul>
                    <li>Price: {
                        product.price
                    }</li>
                    <li>Status: กำลังจัดส่ง</li>
                    <li>จำนวนที่ต้องการ:
                        <select value={num}
                            onChange={
                                (e) => {
                                    setNum(e.target.value)
                                }
                        }>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </li>
                    <li>
                        <button className="checkout primary"
                            onClick={
                                () => {
                                    toCart();
                                }
                        }>เพิ่มลงตะกร้า</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default ProductDetail;
