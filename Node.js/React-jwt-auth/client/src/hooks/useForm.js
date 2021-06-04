import { useState } from "react";

const useForm = (initialState) => {
    /*
        Custom Hook que gestiona los estados de cualquier formulario, con cualquier tamaño.
        Necesita como estado inicial un objeto que tenga tantas propiedades
        como inputs tenga el formulario. Además, deberán ser iguales los nombres
        de las propiedades del obj con las etiquetas "name" de los inputs.
    */
    const [form, setForm] = useState(initialState);

    const handleInputChange = e => {
        /*
            Utilizada por todos los inputs del formulario en cada cambio.
            Diferencia el responsable del cambio gracias a su atributo "name".
        */

        const inputName = e.target.name;
        const inputValue = e.target.value;

        setForm(previousState => {
            /* Actualiza sólo la propiedad correspondiente al input específico */
            return {...previousState, [inputName]: inputValue}
        });
    }

    /*
        Decidimos que devuelva el estado (objeto form) y la función
        que actualiza una propiedad individual, en lugar del setForm
     */
    return [form, handleInputChange];
}

export {useForm};