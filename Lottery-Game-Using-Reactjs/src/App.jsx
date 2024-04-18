import { useState } from 'react'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import './Lottery.css'
import { sum } from './helper';

import './App.css'

function App() {
  let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    return ticket[0]===0;
  };

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}
export default App