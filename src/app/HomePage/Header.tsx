import Image from "next/image";
import mainBG from "../public/mainBG.jpg";
export default function Header() {
  return (
    <div className="flex m-4">
      <div className="w-1/2 flex justify-center">
        <Image
          src="/mainBG.png"
          width={600}
          height={500}
          alt="Image"
          className=""
        />
      </div>
      <div className="w-1/2 px-8  flex flex-col justify-center align center ">
        <h2 className="text-4xl font-bold mb-4">Wave <span className="text-orange-500">Synth</span></h2>
        <p className="text-lg mb-4">
          Discover a new way to unleash your creativity and dive into the world
          of music. With Leap Motion, you can now bring your compositions to
          life directly from your browser. 
        </p>
    <p  className="text-lg mb-4">
    Experience the power of
          hand-controlled music creation and let your imagination soar as you
          effortlessly translate your gestures into beautiful melodies. 
    </p>
      </div>
    </div>
  );
}
