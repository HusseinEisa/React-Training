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
import Comments from './Components/Lab5/Task1/Comments';
import CommentsForm from './Components/Lab5/Task2/CommentsForm';

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
      
      <Product />
      
      {/* <LoginForm /> */}
      
      {/* <ContextProvider value={"The Context Value"}>
        <First />
      </ContextProvider> */}
      
      {/* <Comments /> */}
      
      {/* <CommentsForm /> */}
      
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
