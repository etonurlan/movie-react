import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { Footer } from "./components/Footer"
import { Actors } from "./pages/Actors"
import { Movies } from "./pages/Movies"
import { MovieCard } from "./pages/MovieCard"
import { ActorCard } from "./pages/ActorCard"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/movie/:id" element={<MovieCard />} />
        <Route path="/actor/:id" element={<ActorCard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
