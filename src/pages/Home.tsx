import { Hero } from "./components/Hero";
import { StarRepository } from "./components/StarRepository";

export const Home = () => {
  return (
    <div className="container">
      <Hero />
      <StarRepository />
    </div>
  );
};
