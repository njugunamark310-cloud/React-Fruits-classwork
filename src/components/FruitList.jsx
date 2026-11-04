import FruitCard from "./FruitCard.jsx";

function FruitList() {
  return (
    <section>
      <h2>Available Fruits</h2>
      <FruitCard />
      <article>
        <h3>Banana</h3>
        <p>Price: Ksh 30</p>
      </article>
      <article>
        <h3>Orange</h3>
        <p>Price: Ksh 40</p>
      </article>
    </section>
  );
}
export default FruitList;
