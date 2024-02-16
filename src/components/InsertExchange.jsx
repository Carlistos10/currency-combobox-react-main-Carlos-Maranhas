const InsertExchange = ({ currencies, onAddExchange }) => {

    // Guardamos el código de la moneda de origen y destino seleccionadas
    const [codOrigen, setCodOrigen] = useState(Object.keys(currencies)[0]);
    const [codDest, setCodDest] = useState(Object.keys(currencies)[1]);

    // Almacenamos la cantidad
    const [amount, setAmount] = useState('');

    // Se llama al seleccionar una moneda de origen y destino y actualizamos el estado codOrigen y dest
    const handleSelectCodOrigen = (currency) => {
        setCodOrigen(currency);
    };

    const handleSelectCodDest = (currency) => {
        setCodDest(currency);
    };

    // Se llama cuando el usuario escribe en el campo de entrada de la cantidad
    const handleChangeAmount = (event) => {
        // Actualizamos ka cantidad
        setAmount(event.target.value);
    };

    // Se ejecuta cuando se envía el formulario
    const handleSubmit = (event) => {
        // Evita que la página se recargue
        event.preventDefault();

        // Validamos si todos los campos tienen datos
        if (!codOrigen || !codDest || !amount) {
            // Para que no salte error en toda la pagina, creamos una alerta
            return alert('Debes poner unos nuevos datos');
        }

        // Validamos si las monedas de origen y destino son distintas para que no falle la app
        if (codOrigen === codDest) {
            //Si son iguales, creamos otra alerta, como antes
            return alert('Las monedas de origen y destino no pueden ser iguales');
        }

        // Creamos un objeto que representa la nueva transacción con los datos seleccionados
        const newExchange = {
            codOrigen,
            codDest,
            amount: parseFloat(amount),
        };

        // Informa al componente padre el deseo de agregar la nueva transacción
        onAddExchange(newExchange);

        // Resetea los estados codOrigen, codDest y amount a su estado inicial
        setCodOrigen(Object.keys(currencies)[0]);
        setCodDest(Object.keys(currencies)[1]);
        setAmount('');
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
