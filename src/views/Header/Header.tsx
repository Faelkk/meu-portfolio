import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import NavigationHeader from "./Components/NavigationHeader";
import useModal from "../../Components/Modal/useModal";
import Modal from "../../Components/Modal/Modal";

const Header = () => {
  const { isVisibleModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <header className="sticky top-0 z-40 flex justify-center border-b border-gray-200/70 bg-gray-50/80 backdrop-blur-xl dark:border-white/8 dark:bg-[#0a0d12]/80">
      <nav className="flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Navegação principal">
        <a className="group flex items-center gap-3" href="#inicio" aria-label="Rafael Achtenberg - início">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-sm font-bold text-white transition-transform group-hover:rotate-6 dark:bg-white dark:text-gray-950">RA</span>
          <span className="font-semibold tracking-tight text-gray-950 dark:text-white">Rafael Achtenberg</span>
        </a>

        <NavigationHeader ClassNameNav="hidden lg:flex" ClassNameUL="gap-1" />

        <button className="rounded-lg border border-gray-200 p-2.5 text-gray-900 dark:border-white/10 dark:text-white lg:hidden" onClick={handleOpenModal} aria-label="Abrir menu">
          <HamburgerMenuIcon className="h-5 w-5" />
        </button>

        <Modal
          title="Menu"
          classNameOverlay="lg:hidden"
          classNameContent="fixed inset-0 min-h-[100dvh] bg-white px-6 py-20 dark:bg-[#0d1219] lg:hidden"
          open={isVisibleModal}
          onClose={handleCloseModal}
        >
          <NavigationHeader ClassNameUL="flex-col gap-4" ClassNameNav="flex min-h-64 items-center justify-center" classNameLI="text-2xl font-semibold" onClickNavigate={handleCloseModal} />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
