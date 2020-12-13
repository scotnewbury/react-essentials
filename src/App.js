import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (<li>{dish}</li>))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <section>
      <p>Copyright {props.year}</p>
    </section>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon and broccoli",
  "Steak and potatoes"
]

function App() {
  return (
    <div className="App">
      <Header name="Horacio"/>
      <Main adjective="amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
