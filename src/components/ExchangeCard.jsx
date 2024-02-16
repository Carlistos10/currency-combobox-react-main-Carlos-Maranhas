import React from 'react';
import './ExchangeCard.css';

const ExchangeCard = ({
    codOrigen,
    codDest,
    amount,
    exchangeRateOrigen,
    exchangeRateDestino,
    exchangeFlagOrigen,
    exchangeFlagDestino,
    onDeleteExchange,
}) => {
    const amountDestino = ((amount * exchangeRateDestino) / exchangeRateOrigen).toFixed(3);

    return (

        <div class="col-2">
            <div className="exchange-card-figma">
                <div className="card-title rowcv">
                    <div className="tercio">
                        <img className="foto"
                            src={`/img/flags/${exchangeFlagOrigen}`}
                            width={30}
                            height={20}
                        />
                        <p className="izq">{amount} {codOrigen}</p>
                    </div>

                    <div className="tercio">
                        <img className="flecha"
                            src={`/img/flechacambio.png`}
                            width={75}
                            height={50}
                        />
                    </div>

                    <div className="tercio">
                        <img className="foto"
                            src={`/img/flags/${exchangeFlagDestino}`}
                            width={30}
                            height={20}
                        />
                        <p className="izq">{amountDestino} {codDest}</p>
                    </div>
                    <div className="esquina">
                        <button className="delete-button" onClick={onDeleteExchange}>
                            <img
                                src={`/img/quitar-bien.png`}
                                width={25}
                                height={20}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeCard;
