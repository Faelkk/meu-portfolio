import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { cn } from "../../app/utils/cn/cn";
import { useLanguage } from "../../app/i18n/LanguageContext";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  classNameContent?: string;
  classNameOverlay?: string;
  children: ReactNode;
  title: string;
}

const Modal = ({ title, open, classNameContent, classNameOverlay, children, onClose }: ModalProps) => {
  const { content } = useLanguage();

  return <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay className={cn("fixed inset-0 z-50 bg-gray-950/45", classNameOverlay)} />
      <Dialog.Content className={cn("z-[60]", classNameContent)}>
        <Dialog.Title className="sr-only">{title || content.projects.fallbackTitle}</Dialog.Title>
        <Dialog.Description className="sr-only">{title || content.projects.fallbackTitle}</Dialog.Description>
        <Dialog.Close asChild>
          <button
            className="absolute right-5 top-5 z-10 cursor-pointer rounded-lg border border-gray-200 bg-white p-2 outline-none dark:border-white/10 dark:bg-white/5"
            aria-label={content.close}
          >
            <Cross2Icon className="h-5 w-5 text-woodsmoke-900 dark:text-gray-50" />
          </button>
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
};

export default Modal;
