import { Hero } from "./components/Hero";
import { StarRepository } from "./components/StarRepository";
import Timeline from "./components/TimeLine";

export const Home = () => {
  return (
    <div className="container">
      <Hero />
      <StarRepository />
      <Timeline />
    </div>
  );
};
