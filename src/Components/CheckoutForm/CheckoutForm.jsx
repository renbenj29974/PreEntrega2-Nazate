import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('');

    const [error, setError] = useState('');


    const handleConfirm = (event) => {
        event.preventDefault()

        if (email !== confirmEmail) {
            setError('Las direcciones de E-mail deben ser iguales');
            return;
          }        

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <table class="table">
                    <thead>
                        <tr>
                            <th><h5>Nombre</h5></th>
                            <th><h5>Telefono</h5></th>
                            <th><h5>Email</h5></th>
                            <th><h5>Confirmar Email</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><input className="Input" type="text" value={name} onChange={({ target }) => setName(target.value)}/></td>
                        <td><input className="Input" type='text' value={phone} onChange={({ target }) => setPhone(target.value)}/></td>
                        <td><input className="Input" type='email' value={email} onChange={({ target }) => setEmail(target.value)}/></td>
                        <td><input className="Input" type='email' value={confirmEmail} onChange={({ target }) => setConfirmEmail(target.value)}/></td>
                        </tr>
                    </tbody>
                </table> 

                {error && <span className='btn-v'>{error}</span>}
                                                 
                <div className="Label"><br />
                    <button type="submit" className='btn-style'>Crear Orden</button>
                </div> 
            </form>  
        </div>
    )
}

export default CheckoutForm
