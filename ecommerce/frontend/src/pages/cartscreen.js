/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import PD from '../components/PD.js';
import {useSelector, useDispatch} from 'react-redux';
import {listCarts, delCart} from '../actions/product.js';
import {useHistory} from 'react-router-dom';


function cartscreen() {
    const productListCart = useSelector(state => state.productListCart);
    const {product, loading, error} = productListCart;
    const dispatch = useDispatch();
    const history = useHistory();
    const [total, setTotal] = useState(0);


    useEffect(() => {

        dispatch(listCarts())

        return() => {};


    }, []);

    const confirm = () => {
        for (let i of product) {
            for (let l = -1; l < Number(i.num); l++) {
                setTotal(prevent => prevent + i.price);
            }

        }
        alert("สั่งซื้อเสร็จสิ้น");
        dispatch(delCart())
        history.push(`/`);
    }

    return loading ? <div> กำลัง load อยู่นะครับ </div> :
    error? <div className="error"> ERRRR {error} </div > : (<div>
        <h1>
            ตระกร้า
        </h1>
        <ul className="products"> {
            product.map((p) => <li>
                <PD product={p}/>
            </li>)
        } </ul>
        <center>
            <button className="checkout primary"
                onClick={
                    () => {
                        confirm()
                    }
            }>สั่งซื้อ</button>
        </center>
    </div>);
}

export default cartscreen
