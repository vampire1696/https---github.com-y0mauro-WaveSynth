import Image from "next/image";
import React from "react";


type Props = {};

export default function Page({}: Props) {
  return (
    <div className="bg-gray-900 grid grid-cols-2 mt-10">
   <section className=" px-10   ">
  <h2 className="text-4xl font-bold mb-6">About Wave  <span className="text-orange-500">Synth</span> </h2>
  <p className="text-lg mb-4">
    Welcome to our music production website! We are passionate about providing a unique and immersive experience for music enthusiasts, allowing them to create, mix, and produce music using just their hands. Our project combines the power of browser technology with the revolutionary Leap Motion device, enabling users to interact with virtual instruments and effects in a whole new way.
  </p>
  <p className="text-lg mb-4">
    With our platform, you can unleash your creativity and dive into the world of music production with ease. Whether you're a seasoned musician or a beginner, our intuitive interface and powerful features will empower you to bring your musical ideas to life.
  </p>
  <p className="text-lg mb-4">
    Collaborate with other artists, experiment with different sounds, and create stunning compositions right from your browser. Our website is designed to be accessible on any device, ensuring that you can work on your music projects seamlessly, no matter where you are.
  </p>
  <p className="text-lg">
    Join our community of music producers, discover new possibilities, and take your music production skills to the next level. Start your musical journey with us today!
  </p>
</section>
<section className="grid justify-center">
<Image alt="" src="/computer2.png" width={550} height={550} />

</section>

    </div>
  );
}
