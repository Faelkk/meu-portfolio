import { useLanguage } from "../../app/i18n/LanguageContext";

const Footer = () => {
  const { content } = useLanguage();

  return <footer className="flex justify-center border-t border-[#cfdae1] bg-[#e5edf2] px-6 py-10 text-sm text-gray-500 dark:border-white/[.08] dark:bg-[#0c151d] dark:text-gray-500">
    <div className="flex w-full max-w-7xl flex-col justify-between gap-3 sm:flex-row">
      <span>© {new Date().getFullYear()} Rafael Achtenberg</span>
      <span>{content.footer}</span>
    </div>
  </footer>;
};

export default Footer;
