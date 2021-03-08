import express from 'express';
import products from './data.js';
import carts from './carts.js';

const app = express();

// เอา list ทั้งหมดของ products
app.get('/api/products', (_, res) => {
    res.send(products);
})

// เอา list ทั้งหมดของ products
app.get('/api/product/:id', (req, res) => {
    const product = products.find(x => x._id === req.params.id);
    res.send(product);
})

app.get('/api/carts', (_, res) => {
    console.log(carts);
    res.send(carts);
})

app.post('/api/carts/:id/:num', (req, res) => {
    const product = products.find(x => x._id === req.params.id);
    const data = {
        _id: req.params.id,
        url: product.url,
        name: product.name,
        brand: product.brand,
        price: product.price,
        stars: product.stars,
        num: req.params.num
        

    }
    carts.push(data)
    console.log(carts);


})

// เริ่มเปิด server ที่ port 5000
app.listen(5000, () => {
    console.log('starting server แล้วเด้อ');
    console.log('ทดสอบ');
});
