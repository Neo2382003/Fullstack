import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const pa1 = (part1 + exercises1)
  const pa2 = (part2 + exercises2)
  const pa3 = (part3 + exercises3)
  const tot = (exercises1 + exercises2 + exercises3)


  return (
    <div>
      <h1>{course}</h1>
      <p>
        {pa1}
      </p>
      <p>
        {pa2}
      </p>
      <p>
        {pa3}
      </p>
      <p>Number of exercises {tot}</p>
    </div>
  )
}

export default App
