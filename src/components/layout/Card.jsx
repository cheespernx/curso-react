import React from 'react';
import './Card.css';

export default props =>
	<div className="Card" >
		<div className="Conteudo">
			{props.children}
		</div>
		<div className="Footer">
			<small>{props.title}</small>
		</div>
	</div>