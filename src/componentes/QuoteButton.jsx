import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <div>
      <button className='quoteBox_button' onClick={newQuote} style={{backgroundColor: color}}>
      <i className='bx bx-right-arrow-alt'></i>
      </button>
    </div>
  )
}

export default QuoteButton
