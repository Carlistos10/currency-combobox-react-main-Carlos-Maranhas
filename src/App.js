import React, { useState } from 'react';
import CurrencyComboBox from './components/CurrencyComboBox'; // Ajusta la ruta según la estructura de carpetas de tu proyecto
import CurrencyComboBoxCustom from './components/CurrencyComboBoxCustom';
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
  // Puedes agregar más códigos de moneda, emojis de banderas, nombres de moneda y nombres de archivos de banderas según tus necesidades
}
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
]

const App = () => {
  const [selectedOriginCurrency, setSelectedOriginCurrency] = useState(null);
  const [selectedDestinationCurrency, setSelectedDestinationCurrency] = useState(null);
  const [exchanges, setExchanges] = useState(initialExchanges)

  const handleSelectOriginCurrency = (currency) => {
    setSelectedOriginCurrency(currency);
    // Puedes realizar acciones adicionales cuando se selecciona una moneda, si es necesario.
  };

  const handleSelectDestinationCurrency = (currency) => {
    setSelectedDestinationCurrency(currency);
    // Puedes realizar acciones adicionales cuando se selecciona una moneda, si es necesario.
  };


  return (
    <div>
      <h1>Selected Currency: {selectedOriginCurrency}</h1>
      {selectedOriginCurrency &&
        <img
          alt={selectedOriginCurrency}
          src={"/img/flags/" + currencies[selectedOriginCurrency].flag}>
        </img>
      }
      <CurrencyComboBox
        currencies={currencies}
        onSelectCurrency={handleSelectOriginCurrency}
        label={"Origin Currency:"}
      />
      <h1>Selected Currency: {selectedDestinationCurrency}</h1>
      {selectedDestinationCurrency &&
        <img
          alt={selectedDestinationCurrency}
          src={"/img/flags/" + currencies[selectedDestinationCurrency].flag}>
        </img>
      }
      <CurrencyComboBoxCustom
        currencies={currencies}
        onSelectCurrency={handleSelectDestinationCurrency}
        label="Destination currency:"
      />
    </div>
  );



};

export default App;
