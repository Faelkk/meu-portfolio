import { cn } from "../../../app/utils/cn/cn";
import BtnColorMode from "./BtnColorMode";


interface NavigationsHeaderProps {
  ClassNameUL?: string;
  classNameLI?: string;
  ClassNameNav?: string;
  onClickNavigate?: () => void;
}

const NavigationHeader = ({
  classNameLI,
  ClassNameUL,
  ClassNameNav,
  onClickNavigate,
}: NavigationsHeaderProps) => {
  return (
    <nav className={ClassNameNav}>
      <ul className={cn("list-none pl-0 text-gray-900 dark:text-gray-100 flex items-center justify-center", ClassNameUL)}>
        <li className={classNameLI}>
          <a
            href="#inicio"
            className="hover:text-blue-300 transition-color p-3"
            onClick={onClickNavigate}
          >
            Inicio
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#about"
            className="hover:text-blue-300 transition-color p-3"
            onClick={onClickNavigate}
          >
            Sobre mim
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#skills"
            className="hover:text-blue-300 transition-color p-3"
            onClick={onClickNavigate}
          >
            Habilidades
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#projects"
            className="hover:text-blue-300 transition-color p-3"
            onClick={onClickNavigate}
          >
            Projetos
          </a>
        </li>

        <li className={classNameLI}>
          <a
            href="#contact"
            className="hover:text-blue-300 transition-color p-3"
            onClick={onClickNavigate}
          >
            Contato
          </a>
        </li>

       <BtnColorMode />
      </ul>
    </nav>
  );
};

export default NavigationHeader;
