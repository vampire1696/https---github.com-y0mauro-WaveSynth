import React from "react";

type Feature = {
  icon: string;
  title: string;
  description: string;
  note?: string;
};

const features: Feature[] = [

  {
    icon: "https://static.soundtrap.com/public/images/education/multidevice.svg",
    title: "On Any Device",
    description:
      "With Wave Synth, you can record and edit audio and collaborate with others on any device, no matter where you are.",
  },
  {
    
    icon: "image.png",
    title: "Virtual Instruments",
    description:
      "Access a wide range of virtual instruments, including synthesizers, drum machines, and samplers, to create unique music compositions.",
  },
  {
    icon: "https://static.soundtrap.com/public/images/education/realtimemixing.svg",
    title: "Real-Time Effects",
    description:
      "Apply real-time audio effects such as reverb, delay, distortion, and filters to your music tracks, and hear the changes instantly as you mix.",
  },
  {
    icon: "https://static.soundtrap.com/public/images/education/looping.svg",
    title: "Looping and Sampling",
    description:
      "Easily create seamless loops, chop and rearrange samples, and layer different sounds to craft complex musical arrangements.",
  },
  {
    icon: "https://static.soundtrap.com/public/images/education/collaboration.svg",
    title: "Collaborative Features",
    description:
      "Collaborate with others in real-time, share project spaces, and exchange ideas and feedback to create music together.",
  },
  {
    icon: "https://static.soundtrap.com/public/images/education/customization.svg",
    title: "Customization and Personalization",
    description:
      "Personalize your workspace, create custom templates, save presets, and tailor the user interface to suit your workflow and preferences.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features grid grid-cols-3 m-5 gap-4 p-8 rounded-lg">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`feature has-medium-padding grid grid-cols-2 bg-purple-${index % 2 === 0 ? '900' : '800'} rounded-lg shadow-md`}
        >
          <figure className="feature__icon flex items-center justify-center">
            <img alt="" className="has-observed" src={feature.icon} />
          </figure>
          <div className="feature__container p-4">
            <h3 className="feature__title text-lg font-bold mb-2 text-white">{feature.title}</h3>
            <p className="feature__description text-gray-300">{feature.description}</p>
            {feature.note && (
              <p
                className="feature__description mt-2 text-gray-300"
                dangerouslySetInnerHTML={{ __html: feature.note }}
              ></p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
