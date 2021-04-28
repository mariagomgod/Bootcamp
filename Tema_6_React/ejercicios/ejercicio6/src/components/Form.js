import { useState, useContext } from "react";
import { GlobalContext } from "../App";

export default function Form() {

    const {setContacts} = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");

    function handleName(e) {
        setName(e.target.value);
    };

    function handleSurname(e) {
        setSurname(e.target.value);
    };

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    };

    function handleAddress(e) {
        setAddress(e.target.value);
    };

    function handleZipCode(e) {
        setZipCode(e.target.value);
    };

    function handleCity(e) {
        setCity(e.target.value);
    };
    /* 
        const initialState = {
            name: "",
            surname: "",
            address: "",
            zipCode: "",
            city: "",
            phoneNumber: ""
        };
    
        const [form, setForm] = useState(initialState)
    
        function handleInput(e) {
            const inputName = e.target.id;
            const newValue = e.target.value;
    
            setForm({ ...form, ...{ [inputName]: newValue } })
        } */

    function submit(e) {

        e.preventDefault();

        const newContact = {
            name: name,
            surname: surname,
            address: address,
            zipCode: zipCode,
            city: city,
            phoneNumber: phoneNumber
        };

        /* const newContact = {
            name: form.name,
            surname: form.surname,
            address: form.address,
            zipCode: form.zipCode,
            city: form.city,
            phoneNumber: form.phoneNumber
        }; */

        //const newContact = {name, surname, address, zipCode, city, phoneNumber}; 
        // Esto se puede hacer en lugar de lo de arriba cuando coincide una propiedad con el nombre del estado

        setContacts(currentContacts => [...currentContacts, newContact]);

        e.target.reset();
        /*  setName("");
         setSurname("");
         setPhoneNumber("");
         setAddress("");
         setZipCode("");
         setCity(""); */
    }

    return (
        /*  <form className="form-group" onSubmit={submit}>
             <input className="form-control mb-3" type="text" name="name" value={form.name} onChange={handleName} placeholder="Introduce your name" />
             <input className="form-control mb-3" type="text" name="surname" value={form.surname} onChange={handleSurname} placeholder="Introduce your surname" />
             <input className="form-control mb-3" type="text" name="phoneNumber" value={form.phoneNumber} onChange={handlePhoneNumber} placeholder="Introduce your phone number" />
             <input className="form-control mb-3" type="text" name="address" value={form.address} onChange={handleAddress} placeholder="Introduce your address" />
             <input className="form-control mb-3" type="text" name="zipCode" value={form.zipCode} onChange={handleZipCode} placeholder="Introduce your zipcode" />
             <input className="form-control mb-3" type="text" name="city" value={form.city} onChange={handleCity} placeholder="Introduce your city" />
             <input type="submit" className="btn btn-success" value="Register" />
            </form> */
        <div>
            <form className="form-group" onSubmit={submit}>
                <input className="form-control mb-3" type="text" name="name" onChange={handleName} placeholder="Introduce your name" required />
                <input className="form-control mb-3" type="text" name="surname" onChange={handleSurname} placeholder="Introduce your surname" required />
                <input className="form-control mb-3" type="text" name="phoneNumber" onChange={handlePhoneNumber} placeholder="Introduce your phone number" required />
                <input className="form-control mb-3" type="text" name="address" onChange={handleAddress} placeholder="Introduce your address" required />
                <input className="form-control mb-3" type="text" name="zipCode" onChange={handleZipCode} placeholder="Introduce your zipcode" required />
                <input className="form-control mb-3" type="text" name="city" onChange={handleCity} placeholder="Introduce your city" required />
                <input type="submit" className="btn btn-success" value="Register" />
            </form>
        </div>
    )
}