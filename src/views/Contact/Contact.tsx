import { ArrowTopRightIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Container from "../../Components/Container/Container";

const Contact = () => {
  return (
    <Container className="section-shell px-6 md:px-10" id="contact">
      <section className="contact-panel relative w-full max-w-7xl">
        <div className="contact-panel-copy w-full">
          <div className="contact-panel-heading">
            <h2 className="text-[clamp(3rem,7vw,6.8rem)] font-semibold leading-[.95] tracking-[-0.065em] text-gray-950 dark:text-white">
              Vamos conversar.
            </h2>
          </div>

          <div className="contact-panel-actions">
            <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
              Se você precisa de alguém que pense no produto e entregue o código, me conte o contexto. Respondo direto, sem formulário.
            </p>

            <a className="contact-email mt-10" href="mailto:achtenberg.rafa@gmail.com">
              achtenberg.rafa@gmail.com <ArrowTopRightIcon />
            </a>

            <nav className="mt-12 flex gap-3" aria-label="Redes sociais">
              <a className="contact-social" href="https://github.com/Faelkk" target="_blank" rel="noreferrer"><GitHubLogoIcon /> GitHub</a>
              <a className="contact-social" href="https://www.linkedin.com/in/achtenrafael/" target="_blank" rel="noreferrer"><LinkedInLogoIcon /> LinkedIn</a>
            </nav>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
