import React, {Component} from 'react';

class Product extends Component{
    render(){
        
        const products = ["Learning React", "Pro React","Beggining React","test"];
        const listProducts = products.map((product)=>
            <li key={product.toString()}>{product}</li>
        );

        return(
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}

export default Product;