export default function ContactBook({ contacts }) {
    return (
        <div className="row">
            {contacts.map((contact, index) => {
                return (
                    <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.phoneNumber}>
                        <li className="list-group-item active">Contacto {index + 1}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.surname}</li>
                        <li className="list-group-item">{contact.phoneNumber}</li>
                        <li className="list-group-item">{contact.address}, {contact.zipCode}, {contact.city}</li>
                    </ul>
                );
            })}
        </div>
    )
}