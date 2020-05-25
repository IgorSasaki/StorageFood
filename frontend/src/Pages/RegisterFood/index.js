import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from '../../Assets/EB_Logo.png';

export default function RegisterFood() {
    return (
        <div className="registerFood-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Exército Brasileiro" style={{ height: '450px' }} />

                    <h1>Campanha de Arrecadação de alimentos 2020</h1>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                            Voltar para a Home
                        </Link>
                </section>

                <form>
                    <input type="text" placeholder="Descrição" />
                    <select>
                        <optgroup label="Unidade de Medida">
                            <option defaultValue hidden> Unidade de Medida </option>

                            <option value="kg">Quilograma</option>
                            <option value="l">Litro</option>
                        </optgroup>
                    </select>
                    <input type="text" placeholder="Medida" />
                    <input type="number" placeholder="Quantidade" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}