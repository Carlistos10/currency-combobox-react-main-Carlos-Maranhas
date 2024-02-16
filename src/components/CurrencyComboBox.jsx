import React, { useState } from 'react';

const CurrencyComboBox = ({ currencies, onSelectCurrency, label }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(Object.keys(currencies)[0]);

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  return (
    <div>
      <label>{label}</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        {Object.keys(currencies).map((currencyCode) => (
          <option key={currencyCode} value={currencyCode}>
            {`${currencies[currencyCode].emoji} ${currencies[currencyCode].name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyComboBox;