import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type { Project } from "../../../../app/hooks/useProjects";
import Modal from "../../../../Components/Modal/Modal";
import ImageDefaultModal from "../ImageDefaultModal/ImageDefaultModal";
import { useLanguage } from "../../../../app/i18n/LanguageContext";
import { projectDescriptionsEn } from "../../../../app/i18n/projectDescriptions";

interface ModalProjectsProps {
  projectModal: Project | null;
  onCloseModal: () => void;
  isVisibleModal: boolean;
}

const ModalProjects = ({ projectModal, onCloseModal, isVisibleModal }: ModalProjectsProps) => {
  const { language, content } = useLanguage();
  if (!projectModal) return null;

  return (
    <Modal
      title={projectModal.name ?? content.projects.fallbackTitle}
      onClose={onCloseModal}
      open={isVisibleModal}
      classNameOverlay="data-[state=open]:animate-overlayShow"
      classNameContent="project-dialog"
    >
      <div className="project-dialog-layout">
        <aside className="project-dialog-summary">
          <div className="project-dialog-logo">
            {projectModal.cardimage?.trim() ? (
              <img src={projectModal.cardimage} alt="" aria-hidden="true" />
            ) : (
              <span>{content.projects.project}</span>
            )}
          </div>

          <h2>{projectModal.name}</h2>

          <div className="project-dialog-tags">
            {projectModal.technologies?.map((technology) => (
              <span key={technology.name}>{technology.name}</span>
            ))}
          </div>

          <div className="project-dialog-actions">
            <a href={projectModal.urlGithub} target="_blank" rel="noreferrer">
              <GitHubLogoIcon /> {content.projects.source}
            </a>
            <a href={projectModal.url} target="_blank" rel="noreferrer">
              {content.projects.open} <ArrowTopRightIcon />
            </a>
          </div>
        </aside>

        <section className="project-dialog-details">
          {projectModal.defaultimage?.trim() ? (
            <a href={projectModal.url} target="_blank" rel="noreferrer" aria-label={`${content.projects.open}: ${projectModal.name}`}>
              <figure className="project-dialog-image">
                <ImageDefaultModal
                  className="h-full w-full object-cover object-top opacity-0 transition-opacity duration-200"
                  src={projectModal.defaultimage}
                  alt={`${content.projects.interface} ${projectModal.name}`}
                />
              </figure>
            </a>
          ) : (
            <div className="project-dialog-image project-dialog-empty">{content.projects.unavailable}</div>
          )}

          <div className="project-dialog-copy">
            <h3>{content.projects.about}</h3>
            <p>{language === "en" ? projectDescriptionsEn[projectModal.id ?? ""] ?? projectModal.description : projectModal.description}</p>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default ModalProjects;
