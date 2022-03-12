import { useEffect , useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
 
function App() {

  const [posts,setPosts]= useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  },[])

  return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home posts={posts}/>}/>
              <Route path="posts" element={<Posts/>}/>
            </Route>
          </Routes>
        </div>
  );
}

export default App;
