import FruitCard from "./FruitCard";

function FruitList() {
  return (
    <section>
      <h2>Available Fruits</h2>

      <FruitCard />

      <div>
        <h3>Banana</h3>
        <p>Price: Ksh 30</p>
      </div>

      <div>
        <h3>Orange</h3>
        <p>Price: Ksh 40</p>
      </div>
    </section>
  );
}

export default FruitList;