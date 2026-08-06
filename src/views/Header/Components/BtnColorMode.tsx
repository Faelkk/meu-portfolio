import DarkMode from "../../../Components/icons/darkMode";
import LightMode from "../../../Components/icons/lightMode";

const BtnColorMode = () => {
  const handleChangeColorMode = () => document.documentElement.classList.toggle("dark");

  return (
    <button onClick={handleChangeColorMode} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white lg:ml-2" aria-label="Alternar tema">
      <LightMode className="h-4 w-4 dark:hidden" />
      <DarkMode className="hidden h-4 w-4 dark:block" />
    </button>
  );
};

export default BtnColorMode;
