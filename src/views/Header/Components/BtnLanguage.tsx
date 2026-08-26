import { useLanguage } from "../../../app/i18n/LanguageContext";

const BtnLanguage = () => {
  const { language, setLanguage, content } = useLanguage();
  const nextLanguage = language === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="language-toggle lg:ml-2"
      aria-label={content.navigation.switchLanguage}
      title={content.navigation.switchLanguage}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
};

export default BtnLanguage;
