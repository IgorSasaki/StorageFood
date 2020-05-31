import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/API';

import './style.css';

export default function ListFood() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        api.get('listFood').then((response) => {
            setFood(response.data)
        })
    }, [])

    function totalizaQuantidade(quantidade, peso, unidade) {
        let somaPeso = 0;

        if (unidade === "l") {
            somaPeso = quantidade * peso;
            return (<p>{somaPeso} l </p>)
        }
        else if (unidade === "kg") {
            somaPeso = (quantidade * peso).toFixed(2);
            return (<p>{somaPeso} kg </p>)
        }
    }

    function somaTotalQuantidade() {
        let somaTotal = 0;
        let pesoTotal = 0;
        let calcPeso = 0;

        for (let i = 0; i < Object.keys(food).length; i++) {
            somaTotal += food[i].quantidade

            if(food[i].unidade === "kg"){
                calcPeso = food[i].quantidade * food[i].medida
                pesoTotal+= calcPeso;
            }
        }

        return(<h1>Lista de Alimentos Arrecadados ({somaTotal} Itens - {pesoTotal.toFixed(2)} Kg)</h1>);
    }

    return (
        <div className="listFood-container">
            <header>
                <div>
                    <h2>Exercito Brasileiro</h2>
                    <span>Braço Forte - Mão Amiga</span>
                </div>

                <Link className="button" style={{ width: '40%', marginLeft: '400px' }} to="/registerFood" >Registrar Alimento</Link>
            </header>

            {somaTotalQuantidade()}

            <ul>
                {
                    food.map((food) => (
                        <li key={food.id}>
                            <strong>Descriçao: </strong>
                            <p>{food.descricao}</p>

                            <strong>Quantidade: </strong>
                            <p>{food.quantidade}</p>

                            <strong>Medida: </strong>
                            <p>{food.medida} {food.unidade}</p>

                            <strong>Total: </strong>
                            {totalizaQuantidade(food.quantidade, food.medida, food.unidade)}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}