import Container from "../../Components/Container/Container";
import Loading from "../../Components/Loading/Loading";
import { useSkills } from "../../app/hooks/useSkill";

const groups = [
  { title: "Frontend", names: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "Tailwind CSS"] },
  { title: "Backend", names: ["Node.js", "NestJS", "C#", ".NET", "Prisma"] },
  { title: "Dados & Cloud", names: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Git"] },
];

const Skills = () => {
  const { skills, isLoading } = useSkills();

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <Container className="section-shell bg-gray-100/70 dark:bg-white/[.025]" id="skills">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">Ferramentas certas.<br />Decisões melhores.</h2>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-400">
            Uma stack moderna para construir produtos completos, performáticos e observáveis sem perder a simplicidade.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {groups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="mt-7 flex flex-wrap gap-3">
                {group.names.map((name) => {
                  const skill = skills?.find((item) => item.name === name);
                  return (
                    <div className="skill-chip" key={name} title={skill?.description}>
                      {skill && <img src={skill.url} alt="" aria-hidden="true" />}
                      <span>{name}</span>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Skills;
