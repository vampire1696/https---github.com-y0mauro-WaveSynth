import Image from "next/image";

import mainBG from "../public/mainBG.jpg";
import Header from "./HomePage/Header";
import FeaturesSection from "./HomePage/FeaturesSection";
export default function Home() {
  return (
    <div>
      <Header />
      <FeaturesSection />
    </div>
  );
}
