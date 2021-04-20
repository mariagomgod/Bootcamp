export default function List(props) {
    return (
        <div>
           <h2>{props.category}</h2>
           <ol>
               {
                   props.products.map(product => {
                       return <li>{product.products}&nbsp;{product.brand}&nbsp;{product.price}€</li>
                   })
               }
           </ol>
        </div>
    )
}
