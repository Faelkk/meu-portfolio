import { cn } from "../../../app/utils/cn/cn";
import BtnColorMode from "./BtnColorMode";

interface NavigationsHeaderProps {
  ClassNameUL?: string;
  classNameLI?: string;
  ClassNameNav?: string;
  onClickNavigate?: () => void;
}

const links = [
  ["Sobre", "#about"],
  ["Experiência", "#experience"],
  ["Tecnologias", "#skills"],
  ["Projetos", "#projects"],
  ["Contato", "#contact"],
];

const NavigationHeader = ({ classNameLI, ClassNameUL, ClassNameNav, onClickNavigate }: NavigationsHeaderProps) => (
  <nav className={ClassNameNav}>
    <ul className={cn("flex list-none items-center text-sm font-medium text-gray-600 dark:text-gray-300", ClassNameUL)}>
      {links.map(([label, href]) => (
        <li className={classNameLI} key={href}>
          <a className="block rounded-lg px-3 py-2 transition-colors hover:bg-gray-100 hover:text-gray-950 dark:hover:bg-white/5 dark:hover:text-white" href={href} onClick={onClickNavigate}>{label}</a>
        </li>
      ))}
      <li><BtnColorMode /></li>
    </ul>
  </nav>
);

export default NavigationHeader;
