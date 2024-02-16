import React, { useState } from 'react';
import './InsertExchange.css';
import CurrencyComboBoxCustom from './CurrencyComboBoxCustom';

const InsertExchange = ({ currencies, onAddExchange }) => {
    const [codOrigen, setCodOrigen] = useState(Object.keys(currencies));
    const [codDest, setCodDest] = useState(Object.keys(currencies));
    const [amount, setAmount] = useState('');

    const handleSelectCodOrigen = (currency) => {
        setCodOrigen(currency);
    };

    const handleSelectCodDest = (currency) => {
        setCodDest(currency);
    };

    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!codOrigen || !codDest || !amount) {
            return alert('Debes completar todos los campos');
        }

        if (codOrigen === codDest) {
            return alert('Las monedas de origen y destino no pueden ser iguales');
        }

        const newExchange = {
            codOrigen,
            codDest,
            amount: parseFloat(amount),
        };

        onAddExchange(newExchange);

        setCodOrigen(Object.keys(currencies)[0]);
        setCodDest(Object.keys(currencies)[1]);
        setAmount();
    };

    return (
        <div className="insert-exchange">
            <div className="rowcv">
                <h3 className="peque">Amount:</h3>
                <h3 className="grand">Origin currency:</h3>
                <h3 className="grand">Destination Currency:</h3>
                <h3 className="peque blanc">Boton</h3>
            </div>
            <form onSubmit={handleSubmit} className="rowcv">
                <div className="peque">
                    <input className='amount'
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={handleChangeAmount}
                    />
                </div>
                <div className="grand">
                    <CurrencyComboBoxCustom
                        currencies={currencies}
                        onSelectCurrency={handleSelectCodOrigen}
                        selectedCurrency={codOrigen}
                    />
                </div>

                <img className="fecha"
                    src={`/img/fechaeleccion.png`}
                    width={75}
                    height={50}
                />

                <div className="grand">
                    <CurrencyComboBoxCustom
                        currencies={currencies}
                        onSelectCurrency={handleSelectCodDest}
                        selectedCurrency={codDest}
                    />
                </div>
                <button className=" peque btn" type="submit">ADD</button>
            </form>
        </div>
    );
};

export default InsertExchange;
