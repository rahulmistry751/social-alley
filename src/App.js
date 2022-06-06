import { Routes,Route } from "react-router-dom";
import { Navbar, Sidebar, Suggestions } from "./components";
import { Bookmarks, Explore,Home } from "./features";
import './index.css';
function App() {
  return (
    <div className="App border-box font-fira bg-background">
      <div className="container mx-auto px-4">
        <Navbar/>
        <div className="cols">
          {/* <div className="cols-3"> */}
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/bookmarks" element={<Bookmarks/>}></Route>
            <Route path="/explore" element={<Explore/>}></Route>
          </Routes>
          <Suggestions/>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
