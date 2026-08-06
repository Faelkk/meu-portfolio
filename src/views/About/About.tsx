import Container from "../../Components/Container/Container";

const About = () => {
  return (
    <Container className="section-shell" id="about">
      <section className="grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-24 lg:px-10">
        <div>
          <h2 className="section-title">Código com visão de produto.</h2>
        </div>

        <div className="space-y-8">
          <p className="text-2xl font-medium leading-snug tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Não entrego apenas telas ou endpoints. Entendo o contexto, tomo decisões técnicas e acompanho a solução até ela funcionar em produção.
          </p>
          <p className="max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
            Atuo no desenvolvimento de interfaces, APIs, regras de negócio e integrações. Tenho experiência com sistemas orientados a dados, processamento assíncrono, IA, mensageria e infraestrutura em nuvem. Sempre equilibrando velocidade, qualidade e manutenção.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Produto", "Clareza sobre o problema antes da solução."],
              ["02", "Arquitetura", "Soluções simples, robustas e fáceis de evoluir."],
              ["03", "Entrega", "Deploy, observabilidade e melhoria contínua."],
            ].map(([number, title, copy]) => (
              <article className="principle-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
