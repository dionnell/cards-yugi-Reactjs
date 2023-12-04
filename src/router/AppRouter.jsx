import { Navigate, Route, Routes } from "react-router-dom"
import { Monsters, Spells, Traps  } from "../cartas/pages"
import { Navbar } from "../cartas/components/Navbar"


export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="Monsters" element={<Monsters/>} />
            <Route path="Spells" element={<Spells/>} />
            <Route path="Traps" element={<Traps/>} />


            <Route path="/*" element={<Navigate to="/Monsters"/>} />

        </Routes>
    </>
  )
}
