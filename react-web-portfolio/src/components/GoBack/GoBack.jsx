import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './index.css';

export const GoBack = () => {
    const navigate = useNavigate();

    return (
        <div className='go-back'>
            <button onClick={() => navigate(-1)} >
                <BiArrowBack
                    size={25}
                    color='#eaeaea'
                />
                <span>Voltar</span>
            </button>
        </div>
    )
}