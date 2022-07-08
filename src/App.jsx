import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"

function App() {

  const [state, setState] = useState(false)
  return (
    <>
      <Dialog visible={state} onHide={() => setState(false)}>
      </Dialog>

      <Button label="Show" onClick={() => setState(true)} />
    </>
  )
}

export default App
