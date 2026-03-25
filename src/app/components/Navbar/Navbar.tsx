/**
 * NAVBAR COMPONENT
 * 
 * Fixed header with navigation menu and language switcher.
 * Content comes from src/content/site-content.ts
 */

import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  content: any;
  language: string;
  onLanguageChange: (lang: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Only English and Vietnamese languages supported
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageSelect = (langCode: string) => {
    onLanguageChange(langCode);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">🎨</span>
          <span className="logo-text">{content.nav.logo}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          {content.nav && content.nav.links && content.nav.links.map((link: any, index: number) => (
            <a key={index} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </div>

        {/* Language Toggle */}
        <div className="navbar-actions">
          <div className="language-dropdown">
            <button
              className="lang-dropdown-btn"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <span className="lang-flag">{currentLanguage.flag}</span>
              <span className="lang-label">{currentLanguage.label}</span>
              <ChevronDown size={16} className={`chevron ${isLangDropdownOpen ? 'open' : ''}`} />
            </button>
            {isLangDropdownOpen && (
              <div className="lang-dropdown-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-dropdown-item ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    <span className="lang-flag">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>
            {content.nav.home}
          </a>
          <a href="#services" className="mobile-nav-link" onClick={toggleMenu}>
            {content.nav.services}
          </a>
          <a href="#gallery" className="mobile-nav-link" onClick={toggleMenu}>
            {content.nav.gallery}
          </a>
          <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>
            {content.nav.about}
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
            {content.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
};