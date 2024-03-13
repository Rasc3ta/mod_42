import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks'
import Header from './components/header/Header'
import TotalRead from './components/TotalRead'

function App() {

  const [bookMark, setBookMark] = useState([]);

  const [spentTime, setSpentTime] = useState(0);

  const handleBookMark = blog => {
    setBookMark([...bookMark, blog]);
  }

  const handleSpentTime = (time)=>{
    setSpentTime(spentTime + time);
    console.log(spentTime + time);
  }

  return (
    <>
      <Header></Header>
      <main className="flex justify-center w-[80vw] max-w-[1280px] mx-auto items-start gap-6">
        <Blogs
          handleSpentTime={handleSpentTime}
          handleBookMark={handleBookMark}
        ></Blogs>
        <div>
          <TotalRead time={spentTime}></TotalRead>
          <BookMarks bookMark={bookMark}></BookMarks>
        </div>
      </main>
    </>
  );
}

export default App
