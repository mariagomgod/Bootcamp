import './App.css';
import Form from './components/Form';
import ContactBook from './components/ContactBook';
import { useState } from 'react';

const contacts = [
  { id: "Contacto 0", name: "Federica", surname: "Rica América", address: "Angustias Street, 27, 2B", city: "Málaga", zipCode: 29006, phoneNumber: 748452178 },
  { id: "Contacto 1", name: "Rafael", surname: "Remar Martínez", address: "Hipofeses Street, 11, 3A", city: "Málaga", zipCode: 29006, phoneNumber: 667542184 },
  { id: "Contacto 2", name: "José", surname: "Sanz Morales", address: "Teodosio Street, 43, 2C", city: "Málaga", zipCode: 29006, phoneNumber: 652167496 }
];


function App() {

  const [currentContacts, setCurrentContacts] = useState(contacts); /* Creo un estado para los contactos
  y como estado inicial le paso el array contacts*/

  return (
    <div className="App">
      <ContactBook contacts={currentContacts} /> {/* paso el array por props al componente agenda */}
      <Form />

    </div>
  );
}

export default App;
