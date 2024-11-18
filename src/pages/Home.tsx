import { Hero } from "./components/Hero";
import { StarRepository } from "./components/StarRepository";
import Timeline from "./components/Timeline";

export const Home = () => {
  return (
    <div className="container pt-6">
      <Hero />
      <StarRepository />
      <Timeline />
    </div>
  );
};
