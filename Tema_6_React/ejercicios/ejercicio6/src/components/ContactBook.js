import { useContext } from "react";
import { GlobalContext } from "../App";

export default function ContactBook() {

    const {contacts, setContacts} = useContext(GlobalContext);

    function removeContact(phoneNumber) {
        setContacts(currentContacts => currentContacts.filter(contact => contact.phoneNumber !== phoneNumber));
    }

    return (
        <div>
            <div className="row">
                {contacts.map((contact, index) => {
                    return (
                            <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phoneNumber}>
                            <li className="list-group-item active">Contacto {index + 1}</li>
                            <li className="list-group-item">{contact.name}</li>
                            <li className="list-group-item">{contact.surname}</li>
                            <li className="list-group-item">{contact.phoneNumber}</li>
                            <li className="list-group-item">{contact.address}, {contact.zipCode}, {contact.city}</li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-warning" onClick={() => removeContact(contact.phoneNumber)}>Delete</button>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    )
}