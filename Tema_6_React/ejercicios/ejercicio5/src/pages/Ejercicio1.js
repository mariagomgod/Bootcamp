import Card from "../components/Card";

function Ejercicio1() {
  return (
    <div>
      <Card 
        title="Título 1"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Obcaceti."
        link="https://google.com"
        linkText="Más información"
        imgUrl="http://www.ub.edu/grop/wp-content/uploads/2019/07/placeholder.png"
      />
      <Card 
        title="Título 2"
        paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Obcaceti."
        link="https://marca.com"
        linkText="Más información"
        imgUrl="http://www.ub.edu/grop/wp-content/uploads/2019/07/placeholder.png"
      />
    </div>
  );
}

export default Ejercicio1;