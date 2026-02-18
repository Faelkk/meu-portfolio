import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useIsVisibleItemOnScreen } from "../../app/hooks/useIsVisibleItemOnScreen";
import { cn } from "../../app/utils/cn/cn";
import Email from "../../Components/icons/email";
import Logo from "../../Components/icons/logo";


const Footer = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

  return (
    <footer className="flex justify-center  border-t border-gray-700">
    <section className="w-full px-4 md:px-10">
      <div className={cn('flex justify-between w-full pt-6 pb-6 ', isVisible ? 'animate-slideSideLeftAndFade' : '')} ref={elementRef} > 
        <a
          href="https://github.com/Faelkk"
          target="_blank"
          className=" flex items-center  gap-3  ml-4"
        >
          <div className="border-2 border-gray-950 dark:border-gray-50 p-0.75 rounded-full">
               <Logo className="w-6 h-6" />
          </div>
          <span className="hidden sm:block text-left text-woodsmoke-900 dark:text-gray-50">
            Developed by <strong>Rafael Achtenberg</strong>
          </span>
          <span className="sm:hidden block text-woodsmoke-900 font-medium">
            Rafael
          </span>
        </a>

        <div className="flex mr-4 gap-4">
          <a
            href="https://github.com/Faelkk"
            className="hover:scale-105 transition"
            target="_blank"
          >
           <GitHubLogoIcon className={cn("w-8 h-8 text-woodsmoke-950 dark:text-gray-50")} />
          </a>

          <a
            className="hover:scale-105 transition"
            href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
            target="_blank"
          >
            <LinkedInLogoIcon className={cn("w-8 h-8 text-woodsmoke-950 dark:text-gray-50")} />
          </a>

            <a
                href="mailto:achtenberg.rafa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
              <Email className="w-8 h-7text-woodsmoke-950 dark:text-gray-50" />
              </a>
        </div>
      </div>
       </section>
    </footer>
  );
};

export default Footer;
