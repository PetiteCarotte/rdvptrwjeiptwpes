import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Gauge, Zap } from 'lucide-react';
import { translations, Language } from '../translations/translations';

interface MustangModel {
  generation: string;
  years: string;
  name: string;
  description: string;
  highlights: string[];
  specs: {
    engine: string;
    horsepower: string;
  };
  imageUrl: string;
}

interface MustangTimelineProps {
  language: Language;
}

const imageUrls = [
  "https://images.unsplash.com/photo-1563334273-06aa3ea3f7e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY1JTIwRm9yZCUyME11c3RhbmclMjBjbGFzc2ljfGVufDF8fHx8MTc2MTg0MjY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1600162207913-f6090003fb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTgwcyUyMEZvcmQlMjBNdXN0YW5nfGVufDF8fHx8MTc2MTg0MjY3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1604053719457-7d4ca845f12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTkwcyUyMEZvcmQlMjBNdXN0YW5nJTIwR1R8ZW58MXx8fHwxNzYxODQyNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1723599615344-a7a26c0df543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDA1JTIwRm9yZCUyME11c3Rhbmd8ZW58MXx8fHwxNzYxODQyNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1695578115121-a6ad8bfc40e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTcwJTIwRm9yZCUyME11c3RhbmclMjBCb3NzfGVufDF8fHx8MTc2MTg0MjY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1730829807437-97fb05b2bcac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDE1JTIwRm9yZCUyME11c3RhbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYxODQyNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1620010501690-c28b1673b689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDIwJTIwRm9yZCUyME11c3Rhbmd8ZW58MXx8fHwxNzYxODQyNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function MustangTimeline({ language }: MustangTimelineProps) {
  const t = translations[language];
  
  const mustangModels: MustangModel[] = [
    { ...t.models.first, imageUrl: imageUrls[0] },
    { ...t.models.second, imageUrl: imageUrls[1] },
    { ...t.models.third, imageUrl: imageUrls[2] },
    { ...t.models.fourth, imageUrl: imageUrls[3] },
    { ...t.models.fifth, imageUrl: imageUrls[4] },
    { ...t.models.sixth, imageUrl: imageUrls[5] },
    { ...t.models.seventh, imageUrl: imageUrls[6] }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 py-8">
      <div className="text-center space-y-4 py-8">
        <h1 className="text-blue-600">{t.timelineTitle}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {t.timelineSubtitle}
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 hidden md:block"></div>

        {mustangModels.map((model, index) => (
          <div key={index} className="relative mb-16 md:mb-20">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg hidden md:block z-10"></div>

            {/* Content */}
            <div className="md:ml-20 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <ImageWithFallback 
                    src={model.imageUrl} 
                    alt={`${model.name} ${model.years}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{model.years}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">{model.generation}</div>
                    <h2 className="text-gray-900 mt-1">{model.name}</h2>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {model.description}
                  </p>

                  <div className="space-y-2">
                    {model.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Gauge className="w-4 h-4" />
                        <span>{t.engine}</span>
                      </div>
                      <div className="text-gray-900">{model.specs.engine}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Zap className="w-4 h-4" />
                        <span>{t.power}</span>
                      </div>
                      <div className="text-gray-900">{model.specs.horsepower}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
