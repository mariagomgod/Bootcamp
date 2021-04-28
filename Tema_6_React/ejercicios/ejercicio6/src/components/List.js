export default function List(props) {
    return (
        <div>
           <h2>{props.category}</h2>
           <ol>
               {
                   props.products.map(product => {
                       return <li key={product.id}>{product.products}&nbsp;{product.brand}&nbsp;{product.model ? product.model + " " : ""}{product.price}€</li>
                   })
               }
           </ol>
        </div>
    )
}

/* // Otra opción con desestructuración

export default function List(props) {

    const {category, products} = props;

    return (
        <div>
           <h2>{category}</h2>
           <ol>
               {
                   products.map(({id, product, brand, model, price}) => {
                       return <li key={id}>
                                {product}&nbsp;{brand}&nbsp;{model ? model + " " : ""}{price}€
                              </li>
                   })
               }
           </ol>
        </div>
    )

} */
