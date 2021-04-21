import { useState } from 'react';

export default function Form() {
    
    const handleClick = function () {
       
    };

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [zipCode, setZipCode] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    
    return (
        <>
            <h2>New contact</h2>
            <form>
                {
                    <div>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the name" onChange={(event) => setName(event.target.value)}></input>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the surname" onChange={(event) => setSurname(event.target.value)}></input>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the address" onChange={(event) => setAddress(event.target.value)}></input>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the city" onChange={(event) => setCity(event.target.value)}></input>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the zipcode" onChange={(event) => setZipCode(event.target.value)}></input>
                        <input className="form-control w-50 m-auto" type="text" placeholder="Introduce the phone number" onChange={(event) => setPhoneNumber(event.target.value)}></input>
                        <button type="button" className="btn btn-success" onClick={handleClick}>Register</button>
                    </div>

                }
            </form>
        </>
    )

}