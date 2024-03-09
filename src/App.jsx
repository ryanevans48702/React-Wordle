import { useState } from 'react'
import './App.css'

function App() {
  const [guess, setGuess] = useState('')
  const [word, setWord] = useState('overt')
  const TestWord = () => {
    event.preventDefault()
    const temp = guess.split('');
    if(temp.length == 5){
      temp.forEach((element, index) => {
        console.log(index)
        if(element == word.charAt(index)){
          console.log("true")
        }else if(word.includes(element)){
            console.log("incorrect place")
        }else{
          console.log("false")
        }
      });
    }
    console.log(temp)
  }


  return (
    <>
    <div className='main-div'>
      <div>
        Reactdle
      </div>

      <div className='guess-div'>
        <div className='row 1'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
        <div className='row 2'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
        <div className='row 3'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
        <div className='row 4'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
        <div className='row 5'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
        <div className='row 6'>
          <div className='column' id='1'/>
          <div className='column' id='2'/>
          <div className='column' id='3'/>
          <div className='column' id='4'/>
          <div className='column' id='5'/>
        </div>
      </div>

      <div>
        <form onSubmit={() => TestWord()}>
          <input type="text" 
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
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
