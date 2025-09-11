export default defineNuxtPlugin(({ $i18n }) => {
  // Only run on client-side
  if (process.server) return;
  
  // Function to get stored language
  const getStoredLanguage = () => localStorage.getItem('user-language');
  
  // Function to set language in localStorage
  const setStoredLanguage = (locale: string) => {
    localStorage.setItem('user-language', locale);
  };
  
  // On app load, check if we have a stored language
  const storedLanguage = getStoredLanguage();
  if (storedLanguage && $i18n.availableLocales.includes(storedLanguage)) {
    // Set language from localStorage if it exists and is valid
    $i18n.setLocale(storedLanguage);
  } else {
    // Store current language if no stored preference
    setStoredLanguage($i18n.locale.value);
  }
  
  // Watch for language changes and store them
  watch(() => $i18n.locale.value, (newLocale) => {
    setStoredLanguage(newLocale);
  });
});
