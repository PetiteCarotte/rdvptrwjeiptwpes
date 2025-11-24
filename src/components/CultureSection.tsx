import { ImageWithFallback } from './figma/ImageWithFallback';
import { Film, Trophy, Gamepad2, Tv, Star, Flame } from 'lucide-react';
import { translations, Language } from '../translations/translations';

interface CultureItem {
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  icon: string;
  imageUrl: string;
  model?: string;
}

interface CultureSectionProps {
  language: Language;
}

const iconComponents = {
  Film,
  Trophy,
  Gamepad2,
  Tv,
  Star,
  Flame
};

const cultureImageUrls = [
  "https://images.unsplash.com/photo-1581450943080-94a4b7860671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdGV2ZSUyME1jUXVlZW4lMjBCdWxsaXR0JTIwTXVzdGFuZ3xlbnwxfHx8fDE3NjE4NDI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1545305281-49bc3ecf5412?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGb3JkJTIwTXVzdGFuZyUyMEVsZWFub3J8ZW58MXx8fHwxNzYxODQyNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1744232534898-d988da405bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdXN0YW5nJTIwZHJpZnQlMjBtb3RvcnNwb3J0fGVufDF8fHx8MTc2MTg0MjY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGb3JkJTIwTXVzdGFuZyUyMFNoZWxieSUyMEdUNTAwfGVufDF8fHx8MTc2MTg0MjY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1588782576561-aaffb2a0171a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwTXVzdGFuZyUyMHJhY2luZ3xlbnwxfHx8fDE3NjE4NDI2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1563334273-06aa3ea3f7e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTY1JTIwRm9yZCUyME11c3RhbmclMjBjbGFzc2ljfGVufDF8fHx8MTc2MTg0MjY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1730829807437-97fb05b2bcac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwyMDE1JTIwRm9yZCUyME11c3RhbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYxODQyNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1695578115121-a6ad8bfc40e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTcwJTIwRm9yZCUyME11c3RhbmclMjBCb3NzfGVufDF8fHx8MTc2MTg0MjY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function CultureSection({ language }: CultureSectionProps) {
  const t = translations[language];
  
  const cultureItems: CultureItem[] = [
    { ...t.culture.bullitt, icon: "Film", imageUrl: cultureImageUrls[0] },
    { ...t.culture.eleanor, icon: "Film", imageUrl: cultureImageUrls[1] },
    { ...t.culture.kenBlock, icon: "Trophy", imageUrl: cultureImageUrls[2] },
    { ...t.culture.shelby, icon: "Trophy", imageUrl: cultureImageUrls[3] },
    { ...t.culture.nfs, icon: "Gamepad2", imageUrl: cultureImageUrls[4] },
    { ...t.culture.johnWick, icon: "Film", imageUrl: cultureImageUrls[5] },
    { ...t.culture.iAmLegend, icon: "Film", imageUrl: cultureImageUrls[6] },
    { ...t.culture.formulaDrift, icon: "Trophy", imageUrl: cultureImageUrls[7] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <div className="text-center space-y-4 py-8">
        <h1 className="text-blue-600">{t.cultureTitle}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {t.cultureSubtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {cultureItems.map((item, index) => {
          const IconComponent = iconComponents[item.icon as keyof typeof iconComponents] || Star;
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white mb-1">{item.title}</h3>
                      {item.model && (
                        <div className="text-blue-300 text-sm">{item.model}</div>
                      )}
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <IconComponent className="w-5 h-5" />
                  <span className="uppercase tracking-wider text-sm">{item.category}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-gray-600 text-sm space-y-1">
                    <div className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legacy Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white text-center mt-16">
        <h2 className="mb-4">{t.legacyTitle}</h2>
        <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed">
          {t.legacyText}
        </p>
      </div>
    </div>
  );
}
