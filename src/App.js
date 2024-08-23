import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/Classes/ClassComponent';
import FunctionComponent from './Components/Functions/FunctionComponent';
import FunctionProps from './Components/Functions/FunctionProps';
import ClassProps from './Components/Classes/ClassProps';
import ClassStates from './Components/Classes/ClassStates';
import CartComponent from './Components/Lab2/Task1/CartComponent';
import Form from './Components/Lab2/Task2/Form';
import Product from './Components/Lab3/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassComponent /> */}
        
        {/* <FunctionComponent /> */}
        
        {/* <FunctionProps fname="Hussein" lname="Eissa" college="FCAI" dep="IS" >
          <p>My Function Bio</p>
        </FunctionProps> */}
        
        {/* <ClassProps fname="Hussein" lname="Eissa" college="FCAI" dep="IS" >
          <p>My Class Bio</p>
        </ClassProps> */}
        
        {/* <ClassStates /> */}
        
        {/* <CartComponent /> */}
        
        {/* <Form /> */}
        
        <Product />
      </header>
    </div>
  );
}

export default App;
