import React from 'react';
import './Card.css';

export default props =>
	<div className="Card" style={{ backgroundColor: props.color  || '#303030'}}>
		<div className="Conteudo">
			{props.children}
		</div>
		<div className="Footer">
			<small>{props.title}</small>
		</div>
	</div>