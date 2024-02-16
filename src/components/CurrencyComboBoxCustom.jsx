import React, { useState } from 'react';

const CurrencyComboBoxCustom = ({ currencies, onSelectCurrency, label }) => {

  // Almacenamos el código de divisa seleccionado, el cual al principio no tiene valor
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  // Aqui manejamos el extensible con cada click
  const handleCurrencyClick = (currency) => {
    // Actualiza la moneda seleccionada
    setSelectedCurrency(currency);

    // Notifica la moneda seleccionada
    onSelectCurrency(currency);

    // Oculta la lista de opciones después de hacer click
    setShowOptions(false);
  };
  //Aplicamos el estilo directamente en los divs, no usamos css en el combobox, ya que estaba una parte creada en el proyecto facilitado
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
