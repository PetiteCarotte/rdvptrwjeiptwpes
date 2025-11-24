import { useState } from "react";
import { MustangTimeline } from "./components/MustangTimeline";
import { CultureSection } from "./components/CultureSection";
import { LanguageToggle } from "./components/LanguageToggle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import { Car, Film } from "lucide-react";
import { translations, Language } from "./translations/translations";

export default function App() {
  const [activeTab, setActiveTab] = useState("evolution");
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex justify-end mb-4">
            <LanguageToggle language={language} onLanguageChange={setLanguage} />
          </div>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Car className="w-10 h-10 md:w-12 md:h-12" />
              <h1 className="text-white">{t.headerTitle}</h1>
            </div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t.headerSubtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-none rounded-none">
              <TabsTrigger
                value="evolution"
                className="flex items-center gap-2 px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                <Car className="w-5 h-5" />
                <span>{t.evolutionTab}</span>
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className="flex items-center gap-2 px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                <Film className="w-5 h-5" />
                <span>{t.cultureTab}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="evolution" className="mt-0">
              <MustangTimeline language={language} />
            </TabsContent>

            <TabsContent value="culture" className="mt-0">
              <CultureSection language={language} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-sm">
            {t.footerText}
          </p>
          <p className="text-xs mt-2 text-gray-500">
            {t.footerSubtext}
          </p>
        </div>
      </footer>
    </div>
  );
}