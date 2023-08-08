import Header from './components/Header';
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
      <Header />
      {cards}
    </div>
  );
}

export default App;
