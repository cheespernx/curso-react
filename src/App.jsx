import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';

import './App.css';

export default props => 
	<div className="App">

		<Card title="#01 - Primeiro Componente - Componente com Parâmetros" color="#8C4646">
			<Primeiro />
		</Card>

		<Card title="#02 - Segundo Componente - Componente com Filhos" color="#D96459">
			<ComFilhos >
				<ul>
					<li>Aurora</li>
					<li>Leticia</li>
					<li>Victor</li>
				</ul>
			</ComFilhos>
		</Card>

		<Card title="#03 - Terceiro Componente - Componente com Repetição" color="#28ABE3">
			<Repeticao />
		</Card>

		<Card title="#04 - Quarto Componente - Componente Condicional - V1" color="#1FDA9A">
			<Condicional numero={10} />
		</Card>

		<Card title="#05 - Quarto Componente - Componente Condicional Com IF - V2" color="#E94C6F">
			<CondicionalComIf numero={10} />
		</Card>

		<Card title="#06 - Quinto Componente - Comunicação Direta" color="#FFC33C">
			<Pai sobrenome="Freitas"/>
		</Card>
	</div>
