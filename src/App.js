import Alice from "./components/Alice"

import "./App.css"
import logo from "./assets/logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => window.location.reload(false)}
        />
        <h1>Casino</h1>
        <p>Etes-vous prêt à défier le hasard ?</p>
      </header>
      <main>
        <Alice />
      </main>
    </div>
  )
}

export default App
