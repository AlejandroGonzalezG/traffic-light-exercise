import React, { useState } from 'react';
import  './semaforo.css';

//include images into your bundle
//create your first component


const estiloRojo = {
	backgroundColor: "red",
	width: "150px",
	height: "150px"
}
const estiloAmarillo = {
	backgroundColor: "yellow",
	width: "150px",
	height: "150px"
}


const estiloContainer = {
	justifyContent: "center",
	display: "grid"
}


const Semaforo = () => {

	const [color, setColor] = useState("red");

	return (
		(
			<div className="container" style={estiloContainer}>	
			  		<div className="red light" style={estiloRojo}></div>
			  		<div className="yellow light" style={estiloAmarillo}></div>
			  		<div className="green"></div>
			</div>
		  )
	);
};

export default Semaforo;
