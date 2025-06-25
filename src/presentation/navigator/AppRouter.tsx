import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/home/HomeScreen"
import { ProjectPage } from "../screens/project/ProjectPage"
import { Layout } from "../layouts/Layout"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/project" element={<ProjectPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
