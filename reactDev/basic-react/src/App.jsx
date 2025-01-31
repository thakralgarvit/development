import './App.css'
import Title from "./Title.jsx"; // mostly we give same name to the component as the file as it is case sensitive 
import Message from "./heyMess.jsx";
import ProductCard from "./ProductCard.jsx";

function App() {

  return (
    <div>
      <Message userName="garvit" textColor="blue" />
      <Message userName="diksha" textColor="red" />
      <Message userName="rubal" textColor="grey" />
      <h3>BlockBustbuster Deals | SHOP NOW</h3>
      <ProductCard />
    </div>
  )
}

export default App
