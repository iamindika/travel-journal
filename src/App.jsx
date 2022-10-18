import Header from "./components/Header";
import Card from "./components/Card";
import cardList from "./db/data";

function App() {
  return (
    <>
      <Header />
      {cardList.map((card) => (
        <Card
          key={card.title}
          {...card}
        />
      ))}
    </>
  )
}

export default App;