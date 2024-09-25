import CustomizedDoors from "./components/CustomizedDoors";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Qualityies from "./components/Qualityies";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <div>
      <Hero />
      <Qualityies />
      <WhoWeAre/>
      <CustomizedDoors/>
      <GetInTouch/>
    </div>
  );
}
