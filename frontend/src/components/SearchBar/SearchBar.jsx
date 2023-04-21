import './SearchBar.css'

export default function SearchBar(props) {
  return(
    <div className="container">
      <input type="text" placeholder='Search...' required/>
<<<<<<< HEAD
      <button type='submit' onClick={() => {
        const searchQuery = document.querySelector('input').value
        props.function(searchQuery)
      }}>Search</button>
=======
      <button type='submit' onClick={props.function}>Search</button>
>>>>>>> a66bafff669a5ee94edb976a1ca42371842fd684
    </div>
  )
}