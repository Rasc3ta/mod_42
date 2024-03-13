import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/header/Header";
import TotalRead from "./components/TotalRead";

function App() {
  const [bookMark, setBookMark] = useState([]);

  const [spentTime, setSpentTime] = useState(0);

  const handleBookMark = (blog) => {
    !bookMark.includes(blog) && setBookMark([...bookMark, blog]);
  };

  // handle mark as read
  const handleSpentTime = (time, id) => {
    setSpentTime(spentTime + time);
    setBookMark(
      bookMark.filter((blog) => {
        return blog.id !== id;
      })
    );
  };

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

export default App;
