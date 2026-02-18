import DarkMode from "../../../Components/icons/darkMode";
import LightMode from "../../../Components/icons/lightMode";

const BtnColorMode = () => {
  function handleChangeColorMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={handleChangeColorMode}
      className="relative w-28 h-10 border rounded-md px-1 cursor-pointer"
    >

      <div className="absolute inset-0 rounded-md bg-gray-100 dark:bg-zinc-800 transition-colors duration-300" />


      <div
        className="
          relative
          flex items-center justify-center
          w-10 h-8
          rounded-md
          bg-white dark:bg-zinc-900
          shadow-md
          transition-all duration-300 ease-in-out
          translate-x-0
          dark:translate-x-16
        "
      >
        <LightMode className="w-5 h-5 block dark:hidden text-woodsmoke-900" />
        <DarkMode className="w-5 h-5 hidden dark:block text-gray-50" />
      </div>
    </button>
  );
};

export default BtnColorMode;
