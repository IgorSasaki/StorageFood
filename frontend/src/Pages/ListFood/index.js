import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

export default function ListFood() {
    return (
        <div className="listFood-container">
            <header>
                <div>
                    <h2>Exercito Brasileiro</h2>
                    <span>Braço Forte - Mão Amiga</span>
                </div>

                <Link className="button" style={{ width: '40%', marginLeft: '400px' }} to="/registerFood" >Registrar Alimento</Link>
            </header>

            <h1>Lista de Alimentos Arrecadados</h1>

            <ul>
                <li>
                    <strong>Descriçao: </strong>
                    <p>Descriçao:</p>

                    <strong>Quantidade: </strong>
                    <p>Quantidade: </p>

                    <strong>Medida: </strong>
                    <p>Medida:</p>
                </li>

                <li>
                    <strong>Descriçao: </strong>
                    <p>Descriçao:</p>

                    <strong>Quantidade: </strong>
                    <p>Quantidade: </p>

                    <strong>Medida: </strong>
                    <p>Medida:</p>
                </li>

                <li>
                    <strong>Descriçao: </strong>
                    <p>Descriçao:</p>

                    <strong>Quantidade: </strong>
                    <p>Quantidade: </p>

                    <strong>Medida: </strong>
                    <p>Medida:</p>
                </li>
            </ul>
        </div>
    )
}