import React, { useState } from 'react';
import './App.css';
import ExchangeCard from './components/ExchangeCard';
import InsertExchange from './components/InsertExchange';
//Primero importamos todo lo que vayamos a necesitar 

//Aqui insertamos los datos de todas las monedas que queramos
const currencies = {
  "USD": {
    "emoji": "\uD83C\uDDFA\uD83C\uDDF8",
    "exchangeRate": 1,
    "name": "US Dollar",
    "flag": "us.png"
  },
  "EUR": {
    "emoji": "\uD83C\uDDEA\uD83C\uDDFA",
    "exchangeRate": 0.89,
    "name": "Euro",
    "flag": "eu.png"
  },
  "JPY": {
    "emoji": "\uD83C\uDDEF\uD83C\uDDF5",
    "exchangeRate": 114.42,
    "name": "Japanese Yen",
    "flag": "jp.png"
  },
  "GBP": {
    "emoji": "\uD83C\uDDEC\uD83C\uDDE7",
    "exchangeRate": 0.75,
    "name": "British Pound",
    "flag": "gb.png"
  },
  "AUD": {
    "emoji": "\uD83C\uDDE6\uD83C\uDDFA",
    "exchangeRate": 1.35,
    "name": "Australian Dollar",
    "flag": "au.png"
  },
  "CAD": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDE6",
    "exchangeRate": 1.28,
    "name": "Canadian Dollar",
    "flag": "ca.png"
  },
  "CHF": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDED",
    "exchangeRate": 0.93,
    "name": "Swiss Franc",
    "flag": "ch.png"
  },
  "CNY": {
    "emoji": "\uD83C\uDDE8\uD83C\uDDF3",
    "exchangeRate": 6.36,
    "name": "Chinese Yuan",
    "flag": "cn.png"
  },
  "SEK": {
    "emoji": "\uD83C\uDDF8\uD83C\uDDEA",
    "exchangeRate": 8.51,
    "name": "Swedish Krona",
    "flag": "se.png"
  },
  "NZD": {
    "emoji": "\uD83C\uDDF3\uD83C\uDDFF",
    "exchangeRate": 1.49,
    "name": "New Zealand Dollar",
    "flag": "nz.png"
  },
  "INR": {
    "emoji": "\uD83C\uDDEE\uD83C\uDDF3",
    "exchangeRate": 74.57,
    "name": "Indian Rupee",
    "flag": "in.png"
  },
  "BRL": {
    "emoji": "\uD83C\uDDE7\uD83C\uDDF7",
    "exchangeRate": 5.22,
    "name": "Brazilian Real",
    "flag": "br.png"
  },
  "RUB": {
    "emoji": "\uD83C\uDDF7\uD83C\uDDFA",
    "exchangeRate": 73.96,
    "name": "Russian Ruble",
    "flag": "ru.png"
  },
  "ZAR": {
    "emoji": "\uD83C\uDDFF\uD83C\uDDE6",
    "exchangeRate": 16.96,
    "name": "South African Rand",
    "flag": "za.png"
  },
  "MXN": {
    "emoji": "\uD83C\uDDF2\uD83C\uDDFD",
    "exchangeRate": 20.45,
    "name": "Mexican Peso",
    "flag": "mx.png"
  }
};

//Aqui indicamos dos transacciones como ejemplo
const initialExchanges = [
  {
    id: 1001,
    codOrigen: "EUR",
    codDest: "USD",
    amount: 2
  },
  {
    id: 1002,
    codOrigen: "USD",
    codDest: "JPY",
    amount: 2
  }
];


const App = () => {
  const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(null);
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] = useState(null);
  const [exchanges, setExchanges] = useState(initialExchanges);

  const handleSelectOriginCurrency = (currency) => {
    setSelectedOriginCurrency(currency);
  };

  const handleSelectDestinationCurrency = (currency) => {
    setSelectedDestinationCurrency(currency);
  };

  //Aqui proporcionamos un id aleatorio para cada transaccion
  const handleAddExchange = (exchange) => {
    const newExchange = {
      ...exchange,
      id: Math.random().toString(36).substring(7),
    };
    setExchanges([...exchanges, newExchange]);
  };
  //Aqui procedemos a eliminar la transaccion basandonos en el id
  const handleDeleteExchange = (id) => {
    const filteredExchanges = exchanges.filter((exchange) => exchange.id !== id);
    setExchanges(filteredExchanges);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Currecncy Exchanger</h1>
      </div>
      <div className="main-content">
        <div className="insert-exchange">
          <img className="logo"
            src={`/img/icono.png`}
          />
          {/*Aqui llamamos al InsertExchange para recoger los datos*/}
          <InsertExchange
            currencies={currencies}
            onAddExchange={handleAddExchange}
          />
        </div>
        <div className="exchange-list rowcv">
          {/*Aqui recogemos los datos de las monedas para usarlas en el ExchangeCard*/}
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id}
              codOrigen={exchange.codOrigen}
              codDest={exchange.codDest}
              amount={exchange.amount}
              exchangeRateOrigen={currencies[exchange.codOrigen].exchangeRate}
              exchangeRateDestino={currencies[exchange.codDest].exchangeRate}
              exchangeFlagOrigen={currencies[exchange.codOrigen].flag}
              exchangeFlagDestino={currencies[exchange.codDest].flag}
              onDeleteExchange={() => handleDeleteExchange(exchange.id)}
            />
          ))}
        </div>
      </div >
    </div >
  );
};

export default App;
