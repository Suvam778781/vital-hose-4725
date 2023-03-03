import React from 'react'
interface State{
   time:number;
   seconds:number;
   minutes:number;
}

const Timmer = () => {
   const [state,setState]=React.useState<State>({
      time:60,
      seconds:0,
      minutes:1
   })
  return (
    <div>
      <h2>{`${state.minutes}: ${
         state.seconds <=10 ? `0 ${state.seconds}`:state.seconds
      }`}</h2>
    </div>
  )
}

export default Timmer