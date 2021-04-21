import { Fragment } from "react";
import PropTypes from "prop-types";

export default function FirstComponent(props) {

    //console.log(props, typeof props);
    //console.log(props.date);

    const mySimpleFunction = function (event) {
        // Process event
        console.log(event);
    }
    
    const myFunction = function (bookID) {
        return function (event) {
            console.log(bookID, event.target);
        }
    };

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, consectetur?</p>
            <button onClick={myFunction(1)}>Eliminar Book1</button>
            <button onClick={myFunction(2)}>Eliminar Book2</button>
            <button onClick={mySimpleFunction}>Eliminar Book2</button>
            {/*<button onClick={() => event => console.log(1, event)}>Toda la gestión inLine</button> */}
        </Fragment>
    )
}

FirstComponent.defaultProps = { // es una protección en caso de que no se hayan metido propiedades
    //title: "Sin título",
    date: "Sin fecha",
    products: [],
    
}

FirstComponent.propTypes = { // es una protección en caso de que no se hayan metido propiedades
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products: PropTypes.array,
}

// export default FirstComponent; // alternativa
// SOLO se puede un export default por archivo
// Un componente SOLO puede devolver un único nodo que englobe al resto
// Los props siempre se reciben por argumentos de la función y siempre son objetos. 
// Todos los props se crean en el padre (App.js) y se llaman desde el hijo (FirstComponent)

function SecondComponent() {
    return (
        <> 
            <h1>Soy otro componente</h1>
        </>
    ) // <> </> poniéndolo así significa Fragment también y nos ahorramos tener que importar 
      // tal como está en la función Firstcomponent del principio
}

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente más</h1>
        </div>
    )
}

export {SecondComponent, ThirdComponent};
