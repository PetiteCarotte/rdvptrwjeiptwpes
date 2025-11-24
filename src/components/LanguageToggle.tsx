import { Languages } from 'lucide-react';
import { Language } from '../translations/translations';

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1">
      <button
        onClick={() => onLanguageChange('en')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
          language === 'en'
            ? 'bg-white text-blue-900 shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm">EN</span>
      </button>
      <button
        onClick={() => onLanguageChange('fr')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
          language === 'fr'
            ? 'bg-white text-blue-900 shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        <Languages className="w-4 h-4" />
        <span className="text-sm">FR</span>
      </button>
    </div>
  );
}
