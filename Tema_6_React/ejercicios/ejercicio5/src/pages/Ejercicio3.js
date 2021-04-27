import Form from '../components/Form';
import ContactBook from '../components/ContactBook';
import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

function Ejercicio3() {

  const initialState = [
    { name: "Federica", surname: "Rica América", address: "Angustias Street, 27, 2B", city: "Málaga", zipCode: 29006, phoneNumber: 748452178 },
    { name: "Rafael", surname: "Remar Martínez", address: "Hipofeses Street, 11, 3A", city: "Málaga", zipCode: 29006, phoneNumber: 667542184 },
    { name: "José", surname: "Sanz Morales", address: "Teodosio Street, 43, 2C", city: "Málaga", zipCode: 29006, phoneNumber: 652167496 }
  ];

  const [contacts, setContacts] = useState(initialState); /* Creo un estado para los contactos
  y como estado inicial le paso el array initialState (contactos iniciales)*/


  return (
    <div className="container">
      {/* <h2 className="my-4">Contact Book</h2>
      <ContactBook contacts={contacts} setContacts={setContacts} /> // paso el array por props y la función setContacts al componente agenda 
      <h2 className="my-4">New Contact</h2>
      <Form setContacts={setContacts} /> */}
      <GlobalContext.Provider value={[contacts, setContacts]}>
        <ContactBook />
        <Form />
      </GlobalContext.Provider>
    </div>
  );
}

export default Ejercicio3;
