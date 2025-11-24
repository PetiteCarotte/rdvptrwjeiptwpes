import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Timeline />
    </div>
  );
}