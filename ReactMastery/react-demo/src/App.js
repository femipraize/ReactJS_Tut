import './App.css';

const App = () =>{
  const name = null
  const isNameShowing = false;
  return (
    <div className="App">
     <h1>Hello, {isNameShowing? name: 'Boss man'}!</h1>
     {name ? (
      <>
        <h1> {name}</h1>
      </>
     ) : (
      <>
        <h1> Bug Test</h1>
        <h2> There No bug</h2>
      </>
     ) }
    </div>
  );
}

export default App;
