import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useIsVisibleItemOnScreen } from "../../app/hooks/useIsVisibleItemOnScreen";
import NavigationHeader from "../../views/Header/Components/NavigationHeader";

import { cn } from "../../app/utils/cn/cn";
import useModal from "../../Components/Modal/useModal";
import Modal from "../../Components/Modal/Modal";
import Logo from "../../Components/icons/logo";


const Header = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <header className="flex justify-center shadow-md border-b border-gray-700 ">
      <section className="w-full px-4 md:px-10">
        <nav
        ref={elementRef}
        className={cn(
          "flex items-center   justify-between w-full pt-6 pb-6  ",
          isVisible ? " animate-startSlideDown" : ""
        )}
      >
        <a
          href="https://github.com/Faelkk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 ml-4"
        >
          <figure className="border-2 border-gray-950 dark:border-gray-50 flex items-center rounded-full p-0.75">
           <Logo
  className="w-6 h-6 2xl:w-8 2xl:h-8"
/>

          </figure>
          <h1 className="font-bold text-xl 2xl:text-[1.3rem] text-gray-950 dark:text-gray-50 ">Rafael</h1>
        </a>

       
          <NavigationHeader ClassNameUL="flex gap-2 mr-4 2xl:text-[1.1rem] "  ClassNameNav="hidden minimum:flex"/>

          <>
            <button className="block minimum:hidden" onClick={handleOpenModal} aria-label="Open Menu">
              <HamburgerMenuIcon className="w-6 h-6  text-woodsmoke-900 dark:text-gray-50" />
            </button>

            <Modal
            title="Menu nav"
              classNameContent=" block minimum:hidden fixed top-0 w-full h-[50%] rounded-[6px] bg-woodsmoke-300 dark:bg-woodsmoke-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-startSlideDown"
              open={isVisibleModal}
              onClose={handleCloseModal}
            >
              <NavigationHeader
                ClassNameUL="flex flex-col gap-2"
                ClassNameNav="flex h-full w-full justify-center items-center"
                classNameLI="text-2xl font-bold "
                onClickNavigate={handleCloseModal}
              />
            </Modal>
          </>

      </nav>
      </section>
    </header>
  );
};

export default Header;
