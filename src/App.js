import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import Component1 from './Component1'
import {useState } from  'react'
import "./App.css"
 var x ;

function ErrorFallback({error}) {
  return (
    <div role="alert" id="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={()=>{window.location.reload()}}>Try again</button>
    </div>
  )
}

export default function App() {
  const[randomnum , setRandomnum]=useState(()=>{return null})

const generate_fun=()=>{
     x = Math.floor(Math.random()*20)
    setRandomnum(x)
}
  return (
    <div>
     
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component1 generate_fun={generate_fun} randomnum={randomnum}/>
      </ErrorBoundary>
    </div>
  )
}