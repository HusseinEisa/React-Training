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
import LoginForm from './Components/Lab4/Task1/Form/LoginForm';
import { ContextProvider } from './Components/Lab4/Task2/Context/Context';
import First from './Components/Lab4/Task2/FirstComponent/First';

function App() {
  return (
    <div className="App">
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
      
      {/* <Product /> */}
      
      {/* <LoginForm /> */}
      
      <header className="App-header">
        <ContextProvider value={"The Context Value"}>
          <First />
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
