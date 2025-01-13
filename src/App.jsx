import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import AboutPage from "./pages/AboutPage"
import PostCreatePage from "./pages/posts/PostCreatePage";
import ShowPostDetails from "./pages/posts/ShowPostDetails";
import NotFoundPage from "./pages/NotFoundPage";
import GlobalContext from "./contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
const apiBase = "http://localhost:3000";

function App() {

  const [posts, setPosts] = useState([])

  //filtro i dati direttamente a livello di backend (nel server), tramite il parametro tag.
  const getPosts = () => {
    // let url = `${apiBase}/posts`; // 
    // //// Verifica se il filtro è diverso da "all" - il codice aggiunge un parametro alla query string dell'URL. per chiedere al server di restituire solo i dati che corrispondono al filtro.(tag=art)/tag=${filter}
    // if (filter !== null && filter !== 'all') {
    //   // Se il filtro non è "all", aggiungi il parametro di query all'URL (filtra per tag)
    //   url += `?tags=${filter}`;
    // }
    axios.get(`${apiBase}/posts`).then((resp) => { //Esegui la richiesta GET con l'URL costruito
      console.log("resp.data: ", resp.data);
      setPosts(resp.data) // setPosts(resp.data.posts || []) //Aggiorna lo stato 'posts' con l'elenco dei posts ricevute
    });
  }
  
  useEffect(() => {
    getPosts();
  }, []);

const globalProviderValue = {
  posts
}

  return (
    <GlobalContext.Provider value={globalProviderValue}> 
      <BrowserRouter>
        <Routes>
          {/* //Setti rotta layout con tutte le altre rotte-solo quello che ce nell outlet viene cambiato */}
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts">
              <Route index element={<PostsPage />} />
              <Route path="create" element={<PostCreatePage />} />
              <Route path=":id" element={<ShowPostDetails />} /> //rotta con parametro
            </Route>

            <Route path="*" element={<NotFoundPage />} /> //rotta con parametro
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )

}

export default App;