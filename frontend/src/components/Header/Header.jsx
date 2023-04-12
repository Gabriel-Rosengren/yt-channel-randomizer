import "./Header.css"

export default function Header(props) {
  
  return(
    <header className="grid">
      <div className="grid logo">
        <h1>YouTube Channel Randomizer</h1>
      </div>
      <div className="grid button-container">
        <button onClick={props.function}>Log In</button>
      </div>
    </header>
  )
}