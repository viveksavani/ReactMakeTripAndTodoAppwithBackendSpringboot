import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent,{SecondComponent} from './components/learning-examples/FirstComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import  FourthComponent  from './components/learning-examples/FourthComponent';
import Counter from './components/Counter/Counter';
import TodoApp from './components/todo/TodoApp';



function App() {
  return (
    <div className="App">
     {/* <LearningComponent /> */}
     {/* <Counter /> */}
     <TodoApp />
    </div>
  );
}

class LearningComponent extends Component{

  render(){
    return(
      <div className="learningComponent">
      Hello World
      <FirstComponent />
      <SecondComponent></SecondComponent>
      <ThirdComponent />
      <FourthComponent/>
    </div>
    )
  }
}

// function ThirdComponent(){
//   return(
//    <div className='thirdComponent'>
//       My ThirdComponent
//     </div>
//   );
// }

// class FirstComponent extends Component{

//   render(){
//     return (
//     <div className='firstComponent'>
//       My FirstComponent
//     </div>
//     );
//   }
// }

// class SecondComponent extends Component{

//   render(){

//     return(
//       <div className='secondComponent'>
//         My SecondComponent
//       </div>
//     )
//   }
// }

export default App;
