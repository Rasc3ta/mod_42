import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
     
    <Header></Header>
    <main className='flex justify-between max-w-[80vw] mx-auto'>
    <Blogs></Blogs>
    <BookMarks></BookMarks>
    </main>


    </>
  )
}

export default App
