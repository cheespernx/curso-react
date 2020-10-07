import React from 'react';
import products from '../../data/products';

export default props => {

	function getProducts(){
		return products.map( product => {
			return <li key={ product.id }>
			 {product.id}: {product.name} - R$ {product.price}
			</li>;
		});
	};

	return (
		<div>
			<h2>Repetição</h2>
			<ul>
				{ getProducts() }
			</ul>
		</div>
	);
};