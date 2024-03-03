import { CodeSources, Contact, CourseInfo, Courses, Dashboard, EditProfile, Home, Login, ProjectInfo, Projects, Register } from "@/pages"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseInfo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectInfo />} />
          <Route path="/source-codes" element={<CodeSources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}