import { CodeSourse, Projects, PupularCourses } from "./components";
import { Hero } from "./components/hero/hero";

export const Home = () => {
    return <div>
      <Hero />
      <PupularCourses />
      <Projects />
      <CodeSourse />
    </div>;
  };