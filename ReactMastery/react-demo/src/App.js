import './App.css';

const App = () =>{
  const name = 'Femz'
  const isNameShowing = false;
  return (
    <div className="App">
     <h1>Hello, {isNameShowing? name: 'Boss man'}!</h1>
    </div>
  );
}

export default App;
