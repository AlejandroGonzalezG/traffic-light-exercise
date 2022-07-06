import React, { useState } from 'react';


//include images into your bundle
//create your first component



const estiloContainer2 = {
	justifyContent: "center",
	display: "grid",
	backgroundColor: "black",
	width: "20px",
	height: "100px"
}

const estiloContainer = {
	justifyContent: "center",
	display: "grid",
	backgroundColor: "black",
	width: "160px"
}

const estiloBoton = {
	justifyContent: "center",
	display: "grid",
	marginTop: "20px"
}

const Semaforo = () => {

	const [opacidad, setOpacidad] = useState(0.8);
	const [opacidad2, setOpacidad2] = useState(0.8);
	const [opacidad3, setOpacidad3] = useState(0.8);
	const [opacidad4, setOpacidad4] = useState(0.8);
	const [desplegar, setDesplegar] = useState("none");

	const estiloRojo = {
		backgroundColor: "red",
		width: "150px",
		height: "150px",
		opacity: opacidad,
		borderRadius: "50%",
		margin: "3px"
	}
	const estiloAmarillo = {
		backgroundColor: "yellow",
		width: "150px",
		height: "150px",
		opacity: opacidad2,
		borderRadius: "50%",
		margin: "3px"
	}
	const estiloVerde = {
		backgroundColor: "green",
		width: "150px",
		height: "150px",
		opacity: opacidad3,
		borderRadius: "50%",
		margin: "3px"
	}
	const estiloMorado = {
		backgroundColor: "purple",
		width: "150px",
		height: "150px",
		opacity: opacidad4,
		borderRadius: "50%",
		margin: "3px",
		display: desplegar
	}


	return (
		(
		<>	
			<div className="container2 mx-auto" style={estiloContainer2}>
			</div>
			<div className="container" style={estiloContainer}>	
			  		<div className="red" onClick={() => (setOpacidad2(0.4),setOpacidad3(0.4),setOpacidad(1), setOpacidad4(0.4))} style={estiloRojo}  ></div>
			  		<div className="yellow" onClick={() => (setOpacidad(0.4), setOpacidad3(0.4), setOpacidad2(1), setOpacidad4(0.4))} style={estiloAmarillo}></div>
			  		<div className="green" onClick={() => (setOpacidad(0.4), setOpacidad2(0.4), setOpacidad3(1), setOpacidad4(0.4))} style={estiloVerde}></div>
					<div className="purple" onClick={() => (setOpacidad(0.4),setOpacidad2(0.4),setOpacidad3(0.4), setOpacidad4(1))} style={estiloMorado}></div>
			</div>
			<button className="boton mx-auto" style={estiloBoton} onClick={() => (setOpacidad(0.4), setOpacidad2(0.4), setOpacidad3(0.4), setOpacidad4(0.4))}>Turn off!</button>
			<button className="boton2 mx-auto" style={estiloBoton} onClick={() => setDesplegar("block")}>Display Purple!</button>
			<button className="boton2 mx-auto" style={estiloBoton} onClick={() => setDesplegar("none")}>Hide Purple!</button>
			
		</>	
		  )
	);
};

export default Semaforo;
