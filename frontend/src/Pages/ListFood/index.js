import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../Services/API';

import './style.css';

export default function ListFood() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        api.get('listFood').then((response) => {
            setFood(response.data)

            console.log(response.data)
        })
    })

    return (
        <div className="listFood-container">
            <header>
                <div>
                    <h2>Exercito Brasileiro</h2>
                    <span>Braço Forte - Mão Amiga</span>
                </div>

                <Link className="button" style={{ width: '40%', marginLeft: '400px' }} to="/registerFood" >Registrar Alimento</Link>
            </header>

            <h1>Lista de Alimentos Arrecadados ({Object.keys(food).length})</h1>

            <ul>
                {
                    food.map((food) => (
                        <li>
                            <strong>Descriçao: </strong>
                            <p>{food.descricao}</p>

                            <strong>Quantidade: </strong>
                            <p>{food.quantidade}</p>

                            <strong>Medida: </strong>
                            <p>{food.unidade}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}