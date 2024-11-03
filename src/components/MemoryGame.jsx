import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [inProgress, setInProgress] = useState(false);
  const [won, setWon] = useState(false)

  const constructGrid = () => {
    let totalCards = gridSize * gridSize;
    const numbers = [...Array(Math.floor(totalCards / 2))].map((_, i) => i + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({ id: index, number }));
    setCards(shuffledCards);
  };

  useEffect(() => {
    constructGrid()
  }, [gridSize])
  

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
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

  const handleReset = () => {
    setSolved([])
    setWon(false)
    setInProgress(prev => !prev)
  }

  const handleStart = () => {
    if(gridSize>10)
      setGridSize(6)
    else if(gridSize < 2)
      setGridSize(2)

    setSolved([])
    setFlipped([])
    if (won) {
      setGridSize(gridSize + 1)
      setWon(false)
      return;
    }
    setInProgress(prev => !prev)
  }

  const handleAgain = () => {
    setSolved([])
    setFlipped([])
    setWon(false)
    constructGrid()
  }

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  return (
    <>
      <div className="flex flex-col gap-1 h-screen w-screen items-center justify-center bg-red-100">
        <Link to="/">
          <svg id="logo-72" width="52" height="44" viewBox="0 0 53 44" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#000000"></path></svg>
        </Link>
        <h2 className='text-4xl font-bold m-8'>Memory Game</h2>
        {!inProgress && <label htmlFor="gridSize" className='font-semibold'>Grid Size</label>}
        {!inProgress && <input
          type="text" name="gridSize" id="gridSize"
          inputMode="numeric"
          className='bg-green-50 px-4 py-2 font-bold w-20 rounded-lg mb-8  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
          value={gridSize}
          onChange={(e) => setGridSize(Number(e.target.value))}
          min={2} max={10}
          disabled={inProgress}
        />}
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
        <div className='flex gap-2'>
          {(!inProgress || won) && <button
            onClick={handleStart}
            className="space-x-4 mt-5 px-4 py-2 bg-black text-white border font-semibold rounded-md hover:bg-white hover:text-black hover:scale-105"
          >{won ? "Next Level" : "Start"}
          </button>}

          {inProgress && <button
            onClick={handleReset}
            className="space-x-4 mt-5 px-4 py-2 bg-black text-white border font-semibold rounded-md hover:bg-white hover:text-black hover:scale-105"
          >Reset
          </button>}

          {won && <button
            onClick={handleAgain}
            className="space-x-4 mt-5 px-4 py-2 bg-black text-white border font-semibold rounded-md hover:bg-white hover:text-black hover:scale-105"
          >Play Again
          </button>}

        </div>
      </div>
    </>
  )
}

export default MemoryGame