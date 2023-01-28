import './App.css';

const Person = () => {
  return (
    <>
    <h1> Name: Femi</h1>
    <h2> last Name : Ogbangwor</h2>
    <h2> Age: 32</h2>
    </>
  )
}

const App = () =>{
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
