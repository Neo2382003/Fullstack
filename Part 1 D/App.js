import React, { useState } from 'react'




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total] = [bad + good + neutral]
  const [positive] = [good / total * 100]
  const [Avarage] = [good / total]



    if  (total ===0) {
      return(

        <div>
        <h1> Give feedback</h1>
  
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
  
  
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
  
  
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
        <h1> statistics</h1>
        <h4>Nothing here</h4>
        </div>
      )
    }
    else {
      return(
      <div>
      <h1> Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>
        good
      </button>


      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>


      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>


      <p> </p>

      <h1> statistics</h1>
      <p>Good {good} </p>
      <p>Neutral {neutral} </p>
      <p>Bad {bad}</p>
      <p>Total Feedback {total}</p>
      <p>Avarage {Avarage}</p>
      <p>positive {positive} %</p>
      </div>
      )
    }
  


}


export default App
