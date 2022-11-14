import "./App.css";
import BrewingEquipment from "./Containers/BrewingEquipment/BrewingEquipment";
import OurArticles from "./Containers/OurArticles/OurArticles";
import OurCoffee from "./Containers/OurCoffee/OurCoffee";
import NavBar from "./Components/NavBarCoffee/NavBar";
import Banner from "./Containers/Banner/Banner";
import SignUp from "./Containers/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import NewFlavors from "./Containers/NewFlavors/NewFlavors";
import CoffeeBeans from "./Containers/CoffeeBeans/CoffeeBeans";
import CoffeeRoast from "./Containers/CoffeeRoast/CoffeeRoast";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <OurCoffee />
      <NewFlavors />
      <CoffeeBeans />
      <BrewingEquipment />
      <CoffeeRoast />
      <OurArticles />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
