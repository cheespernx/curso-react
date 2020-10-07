import React from 'react';

import Primeiro from './basicos/Primeiro';
import ComFilhos from './basicos/ComFilhos';
import Card from './layout/Card';
import Repeticao from './basicos/Repeticao';
import Condicional from './basicos/Condicional';
import CondicionalComIf from './basicos/CondicionalComIf';

import './App.css';

export default props =>
	<div className="App">

		<Card title="#01 - Primeiro Componente - Componente com Parâmetros">
			<Primeiro />
		</Card>

		<Card title="#02 - Segundo Componente - Componente com Filhos">
			<ComFilhos >
				<ul>
					<li>Aurora</li>
					<li>Leticia</li>
					<li>Victor</li>
				</ul>
			</ComFilhos>
		</Card>

		<Card title="#03 - Terceiro Componente - Componente com Repetição">
			<Repeticao />
		</Card>

		<Card title="#04 - Quarto Componente - Componente Condicional - V1">
			<Condicional numero={10} />
		</Card>

		<Card title="#05 - Quarto Componente - Componente Condicional Com IF - V2">
			<CondicionalComIf numero={10} />
		</Card>
	</div>
