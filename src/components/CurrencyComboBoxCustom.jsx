import React, { useState } from 'react';

const CurrencyComboBoxCustom = ({ currencies, onSelectCurrency, label }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
    setShowOptions(false);
  };

  return (
    <div>
      <label>{label}</label>
      <div
        style={{
          border: '2px solid #d27c2c',
          padding: '5px',
          width: '85%',
          cursor: 'pointer',
          borderRadius: '10px',
          textAlign: 'center', display: 'flex', alignItems: 'center'
        }}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedCurrency ? (
          <>
            <img
              src={`/img/flags/${currencies[selectedCurrency].flag}`}
              alt={selectedCurrency}
              style={{ marginRight: '30%', width: '9%', }}
            />
            <div style={{ textAlign: 'center' }}>{currencies[selectedCurrency].name}</div>
          </>
        ) : (
          'Select a Currency'
        )}
      </div>

      {showOptions && (
        <div
          style={{
            border: '1px solid #ccc',
            marginTop: '5px',
            position: 'absolute',
            zIndex: '1',
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        >
          {Object.keys(currencies).map((currencyCode) => (
            <div
              key={currencyCode}
              onClick={() => handleCurrencyClick(currencyCode)}
              style={{
                padding: '5px',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              <img
                src={`/img/flags/${currencies[currencyCode].flag}`}
                alt={currencyCode}
                style={{ marginRight: '5px', width: '25px', height: '18px' }}
              />
              {currencies[currencyCode].name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyComboBoxCustom;
