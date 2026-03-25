/**
 * CONTENT UTILITIES
 * 
 * Helper functions for working with bilingual content.
 */

import { BilingualText, Language } from '../types/index';

/**
 * Get text in a specific language
 * 
 * Usage:
 * getText({ en: 'Hello', vi: 'Xin chào' }, 'en') → 'Hello'
 */
export function getText(bilingualText: BilingualText, language: Language): string {
  return bilingualText[language] || '';
}

/**
 * Extract all content for a specific language from a nested object
 * 
 * Recursively converts all BilingualText objects to strings in the target language
 */
export function extractLanguageContent(obj: any, language: Language): any {
  if (!obj) return obj;

  if (typeof obj === 'string' || typeof obj === 'number') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => extractLanguageContent(item, language));
  }

  if (typeof obj === 'object') {
    // Check if it's a bilingual text object
    if ('en' in obj && 'vi' in obj && Object.keys(obj).length === 2) {
      return obj[language] || obj.en;
    }

    // Otherwise recursively process object
    const result: any = {};
    for (const key in obj) {
      result[key] = extractLanguageContent(obj[key], language);
    }
    return result;
  }

  return obj;
}
