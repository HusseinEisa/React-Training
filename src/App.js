import './App.css';
// import logo from './logo.svg';

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
import ProductHookComponent from './Components/Lab6 Hooks/Task1/ProductHookComponent';
import FigmaForm from './Components/Lab6 Hooks/Task2/FigmaForm';

function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
        
        <ClassComponent />
        
        <FunctionComponent />
        
        <FunctionProps fname="Hussein" lname="Eissa" college="FCAI" dep="IS" >
          <p>My Function Bio</p>
        </FunctionProps>
        
        <ClassProps fname="Hussein" lname="Eissa" college="FCAI" dep="IS" >
          <p>My Class Bio</p>
        </ClassProps>
        
        <ClassStates />
        
        <Form />
        
        <ContextProvider value={"The Context Value"}>
          <First />
        </ContextProvider>
        
        <Product />
        
      </header> */}
      
      {/* <CartComponent /> */}
      
      {/* <LoginForm /> */}
      
      {/* <Comments /> */}
      
      {/* <CommentsForm /> */}
      
      {/* <ProductHookComponent /> */}
      
      <FigmaForm />
      
    </div>
  );
}

export default App;
