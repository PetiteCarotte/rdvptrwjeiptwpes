import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl tracking-wider">MUSTANG EVOLUTION</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#timeline" className="hover:text-gray-300 transition-colors">
                Timeline
              </a>
              <a href="#generations" className="hover:text-gray-300 transition-colors">
                Generations
              </a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              Explore History
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#timeline"
              className="block px-3 py-2 hover:bg-white/10 rounded transition-colors"
            >
              Timeline
            </a>
            <a
              href="#generations"
              className="block px-3 py-2 hover:bg-white/10 rounded transition-colors"
            >
              Generations
            </a>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-black">
                Explore History
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}