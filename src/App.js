import "./assets/css/style.css";
import Head from "./components/Head";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import DisceplinesPage from "./pages/DisceplinesPage";
import PostsByCategoryPage from "./pages/PostsByCategoryPage";
import{Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
      <Head/>
      <main>
       <Routes>
        <Route path= "/" element={<HomePage/>}/>
        <Route path= "/post/:id" element={<PostDetailPage/>}/>
        <Route path= "/disceplines" element={<DisceplinesPage/>}/>
        <Route path= "/category" element={<PostsByCategoryPage/>}/>
       </Routes>
      </main>
      
    </>
  
  );
}

export default App;
