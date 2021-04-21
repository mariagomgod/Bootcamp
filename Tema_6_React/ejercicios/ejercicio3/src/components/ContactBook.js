export default function ContactBook(props) {

    const { contacts } = props;

    return (
        <>
            <div>
                <h2>Contact List</h2>
                <div className="row">
                    {
                        contacts.map(({ id, name, surname, address, city, zipCode, phoneNumber }) => {
                            return <ul className="list-group col-4 text-left">
                                <li className="list-group-item active">{id}</li>
                                <li className="list-group-item">{name}</li>
                                <li className="list-group-item">{surname}</li>
                                <li className="list-group-item">{address}</li>
                                <li className="list-group-item">{city}</li>
                                <li className="list-group-item">{zipCode}</li>
                                <li className="list-group-item">{phoneNumber}</li>
                                <li className="list-group-item"><button type="button" className="btn btn-warning">Delete</button></li>
                            </ul>
                        })
                    }
                </div>
            </div>

        </>
    )

}