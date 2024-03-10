import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [guess, setGuess] = useState('')
  const [word, setWord] = useState('overt')
  const [attempt, setAttempt] = useState(0)
  const [past, setPast] = useState(["", "", "", "", "", ""])
  const TestWord = () => {
    event.preventDefault()
    const temp = guess.split('');
    if (temp.length == 5) {
      setAttempt(attempt + 1)
      setGuess('')
      temp.forEach((element, index) => {
        console.log(index)
        if (element == word.charAt(index)) {
          console.log("true")
        } else if (word.includes(element)) {
          console.log("incorrect place")
        } else {
          console.log("false")
        }
      });
    }
    console.log(temp)
  }

  const handleKeyUp = (event) => {
    const inputGuess = event.target.value;
    setGuess(inputGuess); // Update the guess state
    setPast(prevPast => {
      const newPast = [...prevPast];
      newPast[attempt] = inputGuess;
      return newPast;
    });
    console.log(past)
  };


  return (
    <>
      <div className='main-div'>
        <div>
          Reactdle
        </div>

        <div className='guess-div'>
          <div className='row 1'>
            <div className='column' id='01'> 
            <span className='character'>{past[0].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[0].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[0].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[0].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[0].charAt(4)}</span>
            </div>
          </div>
          <div className='row 2'>
            <div className='column' id='01'> 
            <span className='character'>{past[1].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[1].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[1].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[1].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[1].charAt(4)}</span>
            </div>
          </div>
          <div className='row 3'>
            <div className='column' id='01'> 
            <span className='character'>{past[2].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[2].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[2].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[2].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[2].charAt(4)}</span>
            </div>
          </div>
          <div className='row 4'>
            <div className='column' id='01'> 
            <span className='character'>{past[3].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[3].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[3].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[3].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[3].charAt(4)}</span>
            </div>
          </div>
          <div className='row 5'>
            <div className='column' id='01'> 
            <span className='character'>{past[4].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[4].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[4].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[4].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[4].charAt(4)}</span>
            </div>
          </div>
          <div className='row 6'>
            <div className='column' id='01'> 
            <span className='character'>{past[5].charAt(0)}</span>
            </div>
            <div className='column' id='2'>
              <span className='character'>{past[5].charAt(1)}</span>
            </div>
            <div className='column' id='03'> 
            <span className='character'>{past[5].charAt(2)}</span>

            </div>
            <div className='column' id='04'> 
            <span className='character'>{past[5].charAt(3)}</span>

            </div>
            <div className='column' id='05'> 
            <span className='character'>{past[5].charAt(4)}</span>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={TestWord}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyUp={handleKeyUp} // Listen to keyup event
              maxLength={5}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
