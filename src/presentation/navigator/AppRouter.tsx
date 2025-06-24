import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/home/HomeScreen"
import { ProjectPage } from "../screens/project/ProjectPage"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    )
}
