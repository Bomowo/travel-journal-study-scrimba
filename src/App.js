import Card from './components/Card';
import data from './components/data';
import './App.css';


function App() {
  const cards = data.map(item => {
    return (<Card
      key={item.id}
      {...item}
    />
    )
  }
  )

  return (
    <div className="App">
        <nav>
            <img src={logo} alt=""/>
            <span>my travel journal.</span>
        </nav>
      {cards}
    </div>
  );
}

export default App;
