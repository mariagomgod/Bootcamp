import { Fragment } from "react";

export default function FirstComponent(props) {

    console.log(props, typeof props);
    console.log(props.date);

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date}</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, consectetur?</p>
            <button>Click me!</button>
        </Fragment>
    )
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
