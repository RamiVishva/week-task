import logo from './logo.svg';
import './App.css';
import Title from './Component/Title';
import Home from './Pages/Home';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <Title title="Title-1" des="Description-1"></Title>
      <Title title="Title-2" des="Description-2"></Title>
      <Title title="Title-3" des="Description-3"></Title>
      <Home></Home>
      <Counter></Counter>
    </div>
  );
}

export default App;
