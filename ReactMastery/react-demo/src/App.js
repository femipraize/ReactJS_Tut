import './App.css';

const Person = (props) => {
  return (
    <>
    <h1> Name: {props.name}i</h1>
    <h2> last Name : {props.lastName}</h2>
    <h2> Age: {props.age}</h2>
    <h2> Gender:{props.gender}</h2>
    
    </>
  )
}

const App = () =>{
  return (
    <div className="App">
      <Person  name='Femi' lastName='Ogbangwor' age='32' gender='male'/>
      <Person  name='Felicia' lastName='Ogbangwor' age='37' gender='female'/>
      <Person  name='Abraham' lastName='Ariyo' age='31' gender='male'/>
      <Person  name='Grace' lastName='Ogbangwor' age='22' gender='female'/>
      

    </div>
  );
}

export default App;
