import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../Services/API';

import './style.css';

import logoImg from '../../Assets/EB_Logo.png';

export default function RegisterFood() {
    const [descricao, setDescricao] = useState('');
    const [medida, setMedida] = useState('');
    const [unidade, setUnidade] = useState('');
    const [quantidade, setQuantidade] = useState(1);

    async function handleRegisterFood(event){
        event.preventDefault();

        const dados = {
            descricao, medida, unidade, quantidade
        }

        try {
            await api.post('createFood', dados);

            alert('Registrado com sucesso')
        }
        catch (err) {
            console.log(err)
        }
    }

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

                <form onSubmit={handleRegisterFood}>
                    <input type="text" placeholder="Descrição" value={descricao}
                        onChange={(event) => setDescricao(event.target.value)} />
                    <select onChange={(event) => setUnidade(event.target.value)}>
                        <optgroup label="Unidade de Medida">
                            <option defaultValue hidden> Unidade de Medida </option>

                            <option value="kg">Quilograma</option>
                            <option value="l">Litro</option>
                        </optgroup>
                    </select>
                    <input type="text" placeholder="Medida" value={medida}
                        onChange={(event) => setMedida(event.target.value)} />
                    <input type="number" placeholder="Quantidade" value={quantidade}
                        onChange={(event) => setQuantidade(event.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}