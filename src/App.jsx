
import './App.css'
import NavBar from './Component/Navbar/NavBar'
import ItemListContainer from './Component/ItemListContainer/ItemListContainer'


function App() {

  const greeting = "Bienvenidos a Little Love"
  

  return (
    <>
          <NavBar />

          <ItemListContainer greeting={greeting} />
    

    </>
  )
}

export default App
