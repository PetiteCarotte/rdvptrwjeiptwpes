import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gauge, Zap, Calendar, X, Space } from "lucide-react";
import { MustangModel } from "./Timeline";

interface MustangCardProps {
  model: MustangModel;
  position: "left" | "right";
  onClick: () => void;
  isFlipped: boolean;
}

export function MustangCard({ model, position, onClick, isFlipped }: MustangCardProps) {
  return (
    <div className="relative">
      {/* Timeline Dot + Year Badge - dot stays centered, year positioned absolutely so it doesn't shift the dot */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-0">
          {/* Dot centered at container's origin */}
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-white rounded-full border-4 border-black flex-shrink-0"></div>
          </div>

          {/* Year badges positioned absolutely so they don't affect dot centering */}
          {position === "right" && (
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3">
              <span className="px-3 py-1 bg-white text-black rounded-full text-sm shadow-sm">
                {model.year}
              </span>
            </div>
          )}

          {position === "left" && (
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3">
              <span className="px-3 py-1 bg-white text-black rounded-full text-sm shadow-sm">
                {model.year}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Container with 3D Flip */}
      <div className={`lg:w-1/2 ${position === "right" ? "lg:ml-auto lg:pl-12" : "lg:pr-12"}`}>
        <div className="relative h-[400px] md:h-[320px] perspective-[1000px]">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of Card */}
            <div
              onClick={onClick}
              className="absolute w-full h-full backface-hidden cursor-pointer"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Image */}
                  <div className={`relative h-64 md:h-full overflow-hidden ${position === "right" ? "md:order-2" : ""}`}>
                    <ImageWithFallback
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 flex flex-col justify-center ${position === "right" ? "md:order-1" : ""}`}>
                    {/* Model Name */}
                    <h3 className="text-2xl sm:text-3xl text-white mb-6">{model.name}</h3>

                    {/* Specs */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-400">
                        <Zap size={18} className="text-white flex-shrink-0" />
                        <div>
                          <span className="text-sm">Power</span>
                          <p className="text-white">{model.power}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-400">
                        <Gauge size={18} className="text-white flex-shrink-0" />
                        <div>
                          <span className="text-sm">Engine</span>
                          <p className="text-white">{model.engine}</p>
                        </div>
                      </div>

                      {model.topSpeed && (
                        <div className="flex items-center gap-3 text-gray-400">
                          <Calendar size={18} className="text-white flex-shrink-0" />
                          <div>
                            <span className="text-sm">Top Speed</span>
                            <p className="text-white">{model.topSpeed}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800">
                      <p className="text-sm text-gray-400 hover:text-white transition-colors">
                        Click to read more →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div
              onClick={onClick}
              className="absolute w-full h-full backface-hidden cursor-pointer rotate-y-180"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="w-full h-full bg-zinc-950 border border-white/40 rounded-lg overflow-hidden p-6 sm:p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl text-white mb-2">{model.name}</h3>
                    <p className="text-gray-400">{model.year}</p>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm pb-6 border-b border-zinc-800">
                  <div>
                    <span className="text-gray-400">Power:</span>
                    <p className="text-white">{model.power}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Engine:</span>
                    <p className="text-white">{model.engine}</p>
                  </div>
                  {model.topSpeed && (
                    <div>
                      <span className="text-gray-400">Top Speed:</span>
                      <p className="text-white">{model.topSpeed}</p>
                    </div>
                  )}
                  {model.acceleration && (
                    <div>
                      <span className="text-gray-400">0-60:</span>
                      <p className="text-white">{model.acceleration}</p>
                    </div>
                  )}
                </div>

                <div className="flex-1 overflow-y-auto">
                  <p className="text-gray-300 leading-relaxed">{model.description}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
                  <p className="text-sm text-gray-400">Click to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Year Label for Mobile */}
        <div className="lg:hidden text-center mt-4 text-gray-400">{model.year}</div>
      </div>
    </div>
  );
}
