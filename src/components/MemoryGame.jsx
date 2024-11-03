import React, { useEffect, useState } from 'react'

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(2);
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    let totalCards = gridSize * gridSize;
    const numbers = [...Array(Math.floor(totalCards/2))].map((_, i) => i + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({ id: index, number })); 
    setCards(shuffledCards);
  }, [gridSize])


  return (
    <>
      <div className="flex flex-col gap-1 h-screen w-screen items-center justify-start bg-red-100">
        <h2 className='text-4xl font-bold mb-8'>Memory Game</h2>
        <label htmlFor="gridSize" className='font-semibold'>Grid Size</label>
        <input type="number" name="gridSize" className='bg-green-100 px-4 py-2 font-bold w-20 rounded-lg' value={gridSize} onChange={(e) => setGridSize(Number(e.target.value))} min={2} max={10} disabled={inProgress}/>
        {inProgress && <div>
          {cards.map((card) => {
            return <div key={card.id}>  
              {card.number}
            </div>
          })}
        </div>}
        {/* Message */}

        <button onClick={()=>(setInProgress(prev => !prev))} type="button" className="mt-5 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:scale-105">{inProgress ? "Reset" : "Start"}</button>
      </div>
    </>
  )
}

export default MemoryGame