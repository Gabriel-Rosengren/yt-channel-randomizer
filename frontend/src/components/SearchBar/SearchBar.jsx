import './SearchBar.css'

export default function SearchBar(props) {
  return(
    <div className="container">
      <input type="text" placeholder='Search...' required/>
      <button type='submit' onClick={props.function}>Search</button>
    </div>
  )
}