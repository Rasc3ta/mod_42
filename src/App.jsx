import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks'
import Header from './components/header/Header'

function App() {

  const [bookMark, setBookMark] = useState([]);

  const handleBookMark = blog => {
    console.log('bookmarks coming soon !!!')
  }

  return (
    <>
      <Header></Header>
      <main className="flex justify-between max-w-[80vw] mx-auto">
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  );
}

export default App
