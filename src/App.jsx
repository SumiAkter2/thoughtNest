import Blogs from "./Components/Blogs";
import BookMarks from "./Components/BookMarks";
import Header from "./Components/Header";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="md:flex justify-between mx-4 mt-6">
        <Blogs />
        <BookMarks />
      </div>
    </div>
  );
}

export default App;
