import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Authorization from './components/authorization';
import Profile from './components/profile';
import Navbar from "./components/navbar";
import Rightside from './components/rightside';

import Explore from './components/explore';
import Notification from './components/notification';
import Messages from './components/messages';
import Bookmarks from './components/bookmarks';
import Lists from './components/lists';
import Home from './components/home/home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
   <>
   <BrowserRouter>
   <Sidebar>
   <Routes>

  
   <Route path="/" element={<Home/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path='/explore' element={<Explore/>} />
   <Route path='/notifications' element={<Notification/>} />
   <Route path='/messages' element={<Messages/>} />
   <Route path='/bookmarks' element={<Bookmarks/>} />
   <Route path='/lists' element={<Lists/>} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/auth' element={<Authorization/>} />

   </Routes>
   </Sidebar>
   
   </BrowserRouter>
   </>
  );
}

export default App;
