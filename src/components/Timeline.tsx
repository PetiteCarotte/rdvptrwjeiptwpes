import { useState } from "react";
import { MustangCard } from "./MustangCard";

export interface MustangModel {
  id: number;
  name: string;
  year: string;
  power: string;
  engine: string;
  image: string;
  description: string;
  topSpeed?: string;
  acceleration?: string;
}

interface Generation {
  generation: string;
  period: string;
  description: string;
  models: MustangModel[];
}

const generations: Generation[] = [
  {
    generation: "First Generation",
    period: "1964.5 - 1973",
    description: "The original pony car that started it all. Introduced at the 1964 World's Fair, the Mustang created an entirely new class of automobile.",
    models: [
      {
        id: 1,
        name: "1965 Mustang",
        year: "1965",
        power: "164 HP",
        engine: "2.8L I6",
        topSpeed: "116 mph",
        acceleration: "0-60 in 13.2s",
        image: "https://images.unsplash.com/photo-1568625455627-5b0115abb84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The first-generation Mustang was introduced as a 1964½ model. It was a huge success, selling over 1 million units in its first 18 months. The original design featured a long hood and short deck, which became iconic.",
      },
      {
        id: 2,
        name: "1969 Mustang Mach 1",
        year: "1969",
        power: "335 HP",
        engine: "5.8L V8",
        topSpeed: "127 mph",
        acceleration: "0-60 in 6.5s",
        image: "https://images.unsplash.com/photo-1651416814697-a63cb1d30ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY5JTIwbXVzdGFuZyUyMGZhc3RiYWNrfGVufDF8fHx8MTc2NDAwMTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The 1969 Mach 1 represented the peak of first-generation performance. With its fastback design, shaker hood scoop, and powerful V8 options, it became an instant classic and one of the most collectible Mustangs.",
      },
      {
        id: 3,
        name: "1970 Boss 429",
        year: "1970",
        power: "375 HP",
        engine: "7.0L V8",
        topSpeed: "118 mph",
        acceleration: "0-60 in 7.1s",
        image: "https://images.unsplash.com/photo-1568625455627-5b0115abb84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Only 859 Boss 429s were produced in 1970. Built to qualify Ford's 429 engine for NASCAR, this rare Mustang featured a massive semi-hemispherical engine and is now one of the most valuable muscle cars.",
      },
    ],
  },
  {
    generation: "Second Generation",
    period: "1974 - 1978",
    description: "The Mustang II was a response to the 1973 oil crisis, downsizing to a smaller, more fuel-efficient platform while maintaining the Mustang spirit.",
    models: [
      {
        id: 4,
        name: "1974 Mustang II",
        year: "1974",
        power: "88 HP",
        engine: "2.3L I4",
        topSpeed: "92 mph",
        acceleration: "0-60 in 14.0s",
        image: "https://images.unsplash.com/photo-1568625455627-5b0115abb84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The Mustang II won Motor Trend's Car of the Year in 1974. While not a performance icon, it saved the Mustang nameplate during a challenging era and introduced a generation of buyers to the brand.",
      },
      {
        id: 5,
        name: "1978 King Cobra",
        year: "1978",
        power: "139 HP",
        engine: "5.0L V8",
        topSpeed: "109 mph",
        acceleration: "0-60 in 10.5s",
        image: "https://images.unsplash.com/photo-1651416814697-a63cb1d30ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY5JTIwbXVzdGFuZyUyMGZhc3RiYWNrfGVufDF8fHx8MTc2NDAwMTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The King Cobra was the most powerful Mustang II variant. With its dramatic snake graphics and functional hood scoop, it represented Ford's attempt to bring back some muscle car flair.",
      },
    ],
  },
  {
    generation: "Third Generation (Fox Body)",
    period: "1979 - 1993",
    description: "The Fox Body era brought modern handling and eventually returned serious performance to the Mustang lineup. The 5.0L V8 became legendary.",
    models: [
      {
        id: 6,
        name: "1982 Mustang GT",
        year: "1982",
        power: "157 HP",
        engine: "5.0L V8",
        topSpeed: "119 mph",
        acceleration: "0-60 in 8.2s",
        image: "https://images.unsplash.com/photo-1731005207721-bd5abcafad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBib2R5JTIwbXVzdGFuZ3xlbnwxfHx8fDE3NjQwMDExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The return of the GT badge in 1982 marked the beginning of the Fox Body's performance renaissance. While power was still modest, it set the stage for the high-performance models to come.",
      },
      {
        id: 7,
        name: "1987 Mustang GT",
        year: "1987",
        power: "225 HP",
        engine: "5.0L V8",
        topSpeed: "142 mph",
        acceleration: "0-60 in 6.2s",
        image: "https://images.unsplash.com/photo-1731005207721-bd5abcafad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBib2R5JTIwbXVzdGFuZ3xlbnwxfHx8fDE3NjQwMDExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The 5.0L V8 reached 225 HP by 1987, making it a serious performer. This era's Mustang GT became a pop culture icon and a favorite among tuners and enthusiasts.",
      },
      {
        id: 8,
        name: "1993 Mustang SVT Cobra",
        year: "1993",
        power: "235 HP",
        engine: "5.0L V8",
        topSpeed: "144 mph",
        acceleration: "0-60 in 5.9s",
        image: "https://images.unsplash.com/photo-1731005207721-bd5abcafad6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3glMjBib2R5JTIwbXVzdGFuZ3xlbnwxfHx8fDE3NjQwMDExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The first SVT Cobra debuted in 1993 as the ultimate Fox Body. With upgraded suspension, exclusive wheels, and a tuned 5.0L V8, it was a fitting finale to this legendary generation.",
      },
    ],
  },
  {
    generation: "Fourth Generation (SN-95)",
    period: "1994 - 2004",
    description: "A complete redesign brought modern styling while retaining the Fox platform underneath. The modular V8 replaced the classic 5.0L.",
    models: [
      {
        id: 9,
        name: "1996 Mustang Cobra",
        year: "1996",
        power: "305 HP",
        engine: "4.6L V8",
        topSpeed: "152 mph",
        acceleration: "0-60 in 5.5s",
        image: "https://images.unsplash.com/photo-1723599615344-a7a26c0df543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDA1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The 1996 Cobra featured the new modular 4.6L V8 with 305 HP, making it the most powerful production Mustang to date. It combined modern technology with classic muscle car appeal.",
      },
      {
        id: 10,
        name: "2003 Mustang Mach 1",
        year: "2003",
        power: "305 HP",
        engine: "4.6L V8",
        topSpeed: "149 mph",
        acceleration: "0-60 in 5.1s",
        image: "https://images.unsplash.com/photo-1723599615344-a7a26c0df543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDA1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The Mach 1 returned in 2003 with retro styling cues and the shaker hood scoop. It bridged the gap between GT and Cobra with unique styling and enhanced performance.",
      },
      {
        id: 11,
        name: "2003-04 Cobra (Terminator)",
        year: "2003",
        power: "390 HP",
        engine: "4.6L Supercharged V8",
        topSpeed: "155 mph",
        acceleration: "0-60 in 4.5s",
        image: "https://images.unsplash.com/photo-1709014950976-b64b353bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YW5nJTIwc2hlbGJ5JTIwZ3Q1MDB8ZW58MXx8fHwxNzY0MDAxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "Known as the 'Terminator,' this supercharged Cobra was a beast. With 390 HP factory (underrated) and an independent rear suspension, it could run 12-second quarter miles stock.",
      },
    ],
  },
  {
    generation: "Fifth Generation (S197)",
    period: "2005 - 2014",
    description: "A retro-inspired design that paid homage to the 1960s fastback while incorporating modern technology and performance.",
    models: [
      {
        id: 12,
        name: "2005 Mustang GT",
        year: "2005",
        power: "300 HP",
        engine: "4.6L V8",
        topSpeed: "149 mph",
        acceleration: "0-60 in 5.1s",
        image: "https://images.unsplash.com/photo-1723599615344-a7a26c0df543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDA1JTIwZm9yZCUyMG11c3Rhbmd8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The 2005 redesign was a sensation. Drawing inspiration from the classic 1967-68 fastback, it brought back the Mustang's muscle car heritage with modern performance and refinement.",
      },
      {
        id: 13,
        name: "2011 Mustang GT",
        year: "2011",
        power: "412 HP",
        engine: "5.0L V8 (Coyote)",
        topSpeed: "155 mph",
        acceleration: "0-60 in 4.3s",
        image: "https://images.unsplash.com/photo-1739770125588-963bc1a5b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtdXN0YW5nJTIwZ3R8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The all-new Coyote 5.0L V8 returned the legendary displacement with cutting-edge technology. With 412 HP, it was faster than many previous Cobras and marked a new era of Mustang performance.",
      },
      {
        id: 14,
        name: "2013 Shelby GT500",
        year: "2013",
        power: "662 HP",
        engine: "5.8L Supercharged V8",
        topSpeed: "200 mph",
        acceleration: "0-60 in 3.5s",
        image: "https://images.unsplash.com/photo-1709014950976-b64b353bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YW5nJTIwc2hlbGJ5JTIwZ3Q1MDB8ZW58MXx8fHwxNzY0MDAxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "With 662 HP, the 2013-14 GT500 was the most powerful production Mustang ever at the time. It could reach 200 mph and delivered supercar performance at a fraction of the price.",
      },
    ],
  },
  {
    generation: "Sixth Generation (S550)",
    period: "2015 - 2023",
    description: "The first truly global Mustang featuring independent rear suspension, EcoBoost power, and world-class handling dynamics.",
    models: [
      {
        id: 15,
        name: "2015 Mustang GT",
        year: "2015",
        power: "435 HP",
        engine: "5.0L V8 (Coyote)",
        topSpeed: "164 mph",
        acceleration: "0-60 in 4.3s",
        image: "https://images.unsplash.com/photo-1739770125588-963bc1a5b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtdXN0YW5nJTIwZ3R8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The S550 generation brought independent rear suspension for the first time, transforming the Mustang into a world-class sports car that could compete with European rivals.",
      },
      {
        id: 16,
        name: "2018 Mustang GT Performance Pack 2",
        year: "2018",
        power: "460 HP",
        engine: "5.0L V8 (Gen 3 Coyote)",
        topSpeed: "180 mph",
        acceleration: "0-60 in 4.0s",
        image: "https://images.unsplash.com/photo-1739770125588-963bc1a5b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtdXN0YW5nJTIwZ3R8ZW58MXx8fHwxNzY0MDAxMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The refreshed Gen 3 Coyote engine brought 460 HP. With the Performance Pack 2, the GT became a track-focused machine with Michelin Pilot Sport Cup 2 tires and MagneRide dampers.",
      },
      {
        id: 17,
        name: "2020 Shelby GT500",
        year: "2020",
        power: "760 HP",
        engine: "5.2L Supercharged V8",
        topSpeed: "180 mph",
        acceleration: "0-60 in 3.3s",
        image: "https://images.unsplash.com/photo-1709014950976-b64b353bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXN0YW5nJTIwc2hlbGJ5JTIwZ3Q1MDB8ZW58MXx8fHwxNzY0MDAxMTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        description: "The most powerful street-legal Ford ever. With 760 HP and a DCT transmission, the GT500 runs 10-second quarter miles stock and represents the peak of internal combustion Mustang performance.",
      },
    ],
  },
];

export function Timeline() {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Timeline of Excellence</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Journey through six decades of American automotive history
          </p>
        </div>

        <div className="space-y-24">
          {generations.map((gen, genIndex) => (
            <div key={genIndex} id="generations" className="scroll-mt-24">
              {/* Generation Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl mb-2">{gen.generation}</h3>
                <p className="text-xl text-gray-400 mb-4">{gen.period}</p>
                <p className="text-gray-500 max-w-3xl mx-auto">{gen.description}</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Center Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>

                {/* Models */}
                <div className="space-y-12">
                  {gen.models.map((model, index) => (
                    <MustangCard
                      key={model.id}
                      model={model}
                      position={index % 2 === 0 ? "left" : "right"}
                      onClick={() => handleCardClick(model.id)}
                      isFlipped={flippedCardId === model.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
