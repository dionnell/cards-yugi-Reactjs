import { Navigate, Route, Routes } from "react-router-dom"
import { Monsters, Spells, Traps  } from "../cartas/pages"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="Monsters" element={<Monsters/>} />
            <Route path="Spells" element={<Spells/>} />
            <Route path="Traps" element={<Traps/>} />


            <Route path="/*" element={<Navigate to="/Monsters"/>} />

        </Routes>
    </>
  )
}
