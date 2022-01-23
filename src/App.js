import { useEffect, useState } from 'react';
import './App.css';
import { Die } from './Die';
// nanoid- package for unique id
// import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function allNewDice() {
  let diceArr = []
  for (let i = 1; i < 11; i++) {
    diceArr.push({
      // id: nanoid(),
      id: i,
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    })
  }
  console.log(diceArr)
  return diceArr
}


function App() {

  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  const dices = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)

  function rollNewDice() {
    const newDices = (tenzies) ? (allNewDice) : (dice.map(die => die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }))
    setTenzies(tenzies ? !tenzies : tenzies)
    setDice(newDices)
  }

  function holdDice(id) {
    console.log(id)
    const dices = dice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die)
    setDice(dices)
    console.log(dices)
  }


  useEffect(() => {
    console.log("Dice state changed")
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])

  return (
    <main className="App">
      {tenzies ? <h1 className="title">Congrats</h1> : <h1 className="title">Tenzies</h1>}

      {tenzies ? <p className="instructions">You did it!</p> : <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}

      <div className="die-container">
        {dices}
      </div>
      <button className="roll-btn" onClick={rollNewDice}>{tenzies ? "New Game" : "Roll"}</button>
      {tenzies && <Confetti />}
    </main>

  );
}

export default App;
