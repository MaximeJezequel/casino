import Alice from "./components/Alice"

import "./App.css"
import logo from "./logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Casino</h1>
        <p>Etes-vous prêt à défier le hasard ?</p>
      </header>
      <body>
        <Alice />
      </body>
      <footer></footer>
    </div>
  )
}

export default App
