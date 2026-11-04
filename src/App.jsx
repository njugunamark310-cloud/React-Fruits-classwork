import FruitCard from "./components/FruitCard.jsx";
import FruitList from "./components/FruitList.jsx";
import FruitStats from "./components/FruitStats.jsx";
import { FruitCategories } from "./components/FruitCategories.jsx";
import { FruitFooter } from "./components/FruitFooter.jsx";

function App() {
  return (
    <main>
      <h1>My Fruit Collection</h1>
      <FruitCard />
      <FruitList />
      <FruitStats />
      <FruitCategories />
      <FruitFooter />
    </main>
  );
}

export default App;
