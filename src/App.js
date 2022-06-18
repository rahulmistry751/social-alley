import { Routes,Route } from "react-router-dom";
import { Navbar} from "./components";
import { Bookmarks, Explore,Home, Profile,Login,Signup} from "./features";
import './index.css';
function App() {
  return (
    <div className="App font-fira bg-background">
      <div className="container mx-auto px-4">
        <Navbar/>
        <div className="sub-container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/bookmarks" element={<Bookmarks/>}></Route>
            <Route path="/explore" element={<Explore/>}></Route>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
