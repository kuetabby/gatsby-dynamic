import React from "react"
import { Router } from "@reach/router"

import PersonComponent from "../modules/Person"

interface appProps {}

const App: React.FC<appProps> = () => {
  return (
    <Router>
      <PersonComponent path="/app/person/results/:id" />
    </Router>
  )
}

export default App
