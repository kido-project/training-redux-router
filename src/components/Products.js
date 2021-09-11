import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: 'Iphone',
                price: 12,
                slug: 'iphone',
            },
            {
                id: 2,
                name: 'Sony',
                price: 24,
                slug: 'sony',
            },
            {
                id: 3,
                name: 'Macbook',
                price: 36,
                slug: 'macbook',
            },
        ];

        var { match } = this.props;
        var url = match.url;

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                <li className="list-group-item">
                { product.id } - { product.name } - { product.price }</li>
                </NavLink>
            )
        });

        var { location } = this.props;
        console.log(location);
        return (
            <div className="container">
                <h1>Product List</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>   
                </div>
                <div className="row">
                     <Route path="/products/:name" component={Product}/>
                </div>
            </div> 
        )
    }
}

export default Products;
