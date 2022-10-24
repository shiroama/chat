import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "../Contexts/AuthContext"

import Chats from "./Chats.js"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" component={Login} />
            <Route path="/Chats" component={Chats} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App ;