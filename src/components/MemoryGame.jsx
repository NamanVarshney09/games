import React, { useEffect, useState } from 'react'

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [inProgress, setInProgress] = useState(false);
  const [won, setWon] = useState(false)

  useEffect(() => {
    let totalCards = gridSize * gridSize;
    const numbers = [...Array(Math.floor(totalCards / 2))].map((_, i) => i + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({ id: index, number }));
    setCards(shuffledCards);
  }, [gridSize, won])

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0){
      setWon(true)
    }
  }, [solved, cards])


  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId])
      setFlipped([])
      setDisabled(false)
    }
    else {
      setTimeout(() => {
        setFlipped([])
        setDisabled(false)
      }, 700);
    }
  }

  const handleClick = (id) => {
    if (disabled || won)
      return;

    if (flipped.length === 0) {
      setFlipped([id])
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true)
      if (id !== flipped[0]) {
        setFlipped([...flipped, id])
        checkMatch(id)
      }
      else {
        setFlipped([])
        setDisabled(false)
      }
    }
  }

  const handleSubmit = () => {
    setSolved([])
    setWon(false)
    setInProgress(prev => !prev)
  }

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  return (
    <>
      <div className="flex flex-col gap-1 h-screen w-screen items-center justify-center bg-red-100">
        <h2 className='text-4xl font-bold mb-8'>Memory Game</h2>
        <label htmlFor="gridSize" className='font-semibold'>Grid Size</label>
        <input
          type="number" name="gridSize"
          className='bg-green-100 px-4 py-2 font-bold w-20 rounded-lg mb-8'
          value={gridSize}
          onChange={(e) => setGridSize(Number(e.target.value))}
          min={2} max={10}
          disabled={inProgress}
        />
        {inProgress && <div className='grid gap-2 mb-4' style={{ gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`, width: `min(100%, ${gridSize * 5}rem)` }}>
          {cards.map((card) => {
            return <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`aspect-square flex items-center justify-center text-xl font-semibold  rounded-lg cursor-pointer transition-all duration-300 ${isFlipped(card.id) ? isSolved(card.id) ? "bg-green-400 text-white" : "bg-blue-400 text-white" : "bg-yellow-50"}`}>
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          })}
        </div>}

        {won && <div className='mt-5 text-2xl font-bold text-green-600 animate-bounce'>You WON !</div>}

        <button onClick={handleSubmit} type="button" className="mt-5 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:scale-105">{inProgress ? won ? "Play Again" : "Reset" : "Start"}</button>
      </div>
    </>
  )
}

export default MemoryGame