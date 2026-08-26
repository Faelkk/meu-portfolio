import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../../app/i18n/LanguageContext";

const ButtonScrollTop = () => {
  const { content } = useLanguage();
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button className="fixed bottom-2 right-2 cursor-pointer" onClick={handleClick} aria-label={content.backToTop}>
      <ArrowUpIcon className="w-6 h-6 text-woodsmoke-950 dark:text-gray-50" />
    </button>
  );
};

export default ButtonScrollTop;
