import React, { useState } from "react";

function CalculadoraDeSoma(){

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [soma, setSoma] = useState('');

    const calcularSoma = () => {
        const resultado = Number(num1) + Number(num2);
        setSoma(resultado);
    }
    const calcularSubtracao = () => {
        const resultado = Number(num1) - Number(num2);
        setSoma(resultado);
    }


    return(
        <div className="calculadora">
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Digite o primeiro número"/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Digite o segundo número"/>
            <button onClick={calcularSoma}>Calcular soma</button>
            <button onClick={calcularSubtracao}>Calcular Subtração</button>
            {soma !== null && <p>Resultado: {soma}</p>}

        </div>
    );

}

export default CalculadoraDeSoma;