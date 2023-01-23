
import { useState } from 'react'
import './App.css'
import QuoteBox from './componentes/QuoteBox'
import db from "./db/quotes.json" 

const arrayColors = ["#ff85d5", "#84b6f4", "#b186f1", "#ff6961", "#f15fff", "#b186f1", "#d1052a", "#7f00b2", "#24c0ef", "#239089", "#fa8072", "#952f57"]

const getRandom = (arrayElement) => {
  const quantityValues = arrayElement.length
  const randomIndex = Math.floor(Math.random () * quantityValues)
  return arrayElement[randomIndex]
}

function App() {
  const [quote, setQuote] = useState(getRandom(db))

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db))
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
        quote={quote} 
        newQuote={newQuote} 
        color={color}
      />
    </div>
  )
}

export default App
