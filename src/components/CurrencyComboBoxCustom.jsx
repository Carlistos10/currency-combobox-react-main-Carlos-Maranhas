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
          border: '1px solid #ccc',
          padding: '5px',
          width: '150px',
          cursor: 'pointer',
        }}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedCurrency ? (
          <>
            <img
              src={`/img/flags/${currencies[selectedCurrency].flag}`}
              alt={selectedCurrency}
              style={{ marginRight: '5px', width: '25px', height: '18px' }}
            />
            {currencies[selectedCurrency].name}
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
          }}
        >
          {Object.keys(currencies).map((currencyCode) => (
            <div
              key={currencyCode}
              onClick={() => handleCurrencyClick(currencyCode)}
              style={{
                padding: '5px',
                cursor: 'pointer',
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