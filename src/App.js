import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Edit from './crud/edit'
import Firstreact from './crud/firstreact'
// import Save from './crud/save'
// import Sent from './crud/sent'
import Task from './crud/task'
import Create from './crud/task'
// import Calculator from './task/calculator'




export default function App()
{

  return(
    <>
    {/* <Calculator/> */}

    {/* <Sent/>

    <Create/>

    <Save/> */}


    {/* <Task/> */}

    {/* <Edit/> */}


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Firstreact></Firstreact>}/>
      <Route path='/create' element={<Create></Create>}/>
      <Route path='/edit' element={<Edit></Edit>}/>

    </Routes>
    </BrowserRouter>
    </>
  )

}
