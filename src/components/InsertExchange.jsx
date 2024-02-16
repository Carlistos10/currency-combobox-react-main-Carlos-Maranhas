import React, { useState } from 'react';
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

        setCodOrigen(Object.keys(currencies));
        setCodDest(Object.keys(currencies));
        setAmount();
    };

    return (
        <div className="insert-exchange rowcv">
            <h3>Agregar cambio de moneda</h3>
            <form onSubmit={handleSubmit} className="rowcv">
                <input className="valor"
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={handleChangeAmount}
                />
                <label htmlFor="codOrigen" className="origen">Moneda de origen:</label>
                <CurrencyComboBoxCustom
                    currencies={currencies}
                    onSelectCurrency={handleSelectCodOrigen}
                    selectedCurrency={codOrigen}
                />
                <label htmlFor="codDest">Moneda de destino:</label>
                <CurrencyComboBoxCustom
                    currencies={currencies}
                    onSelectCurrency={handleSelectCodDest}
                    selectedCurrency={codDest}
                />
                <label htmlFor="amount">Cantidad:</label>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default InsertExchange;
