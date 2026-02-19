import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";



import Container from "../../Components/Container/Container";
import { useIsVisibleItemOnScreen } from "../../app/hooks/useIsVisibleItemOnScreen";
import { cn } from "../../app/utils/cn/cn";
import Email from "../../Components/icons/email";

const Contact = () => {
  const { isVisible, elementRef } = useIsVisibleItemOnScreen();

  return (
    <Container className="my-20" id="contact">
      <section className={cn('flex flex-col items-start justify-center w-[90%] min-h-96 bg-gray-200 dark:bg-woodsmoke-800 rounded-md p-5', isVisible ? 'animate-startSlideRight' : '')} ref={elementRef}>

          <h2 className="font-bold text-4xl mb-6 text-gray-950 dark:text-gray-300 text-start">Entre em contato Comigo</h2>

          <div className="flex flex-col justify-between gap-6 flex-1">
            <p className="text-md text-woodsmoke-900 dark:text-woodsmoke-400 mt-5 text-xl">
              Procurando por um desenvolvedor ou gostaria de compartilhar seu
              feedback? Fique à vontade para entrar em contato comigo! Estou
              empolgado para responder e ajudar o mais rápido possível. Utilize
              qualquer um dos métodos abaixo para se conectar comigo.
            </p>

            <nav className="flex gap-4">
              <a
                href="https://github.com/Faelkk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <GitHubLogoIcon className={cn("w-8 h-8 text-woodsmoke-950 dark:text-gray-50")} />
              </a>

              <a
                href="https://www.linkedin.com/in/rafael-achtenberg-7a4b12284/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
                <LinkedInLogoIcon className={cn("w-8 h-8 text-woodsmoke-950 dark:text-gray-50")} />
              </a>

              <a
                href="mailto:achtenberg.rafa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition"
              >
              <Email className="w-8 h-8 text-woodsmoke-950 dark:text-gray-50" />
              </a>
            </nav>
          </div>

      </section>
    </Container>
  );
};

export default Contact;
