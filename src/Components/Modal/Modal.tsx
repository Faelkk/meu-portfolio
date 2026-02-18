import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { cn } from "../../app/utils/cn/cn";




interface ModalProps {
  open: boolean;
  onClose: () => void;
  classNameContent?: string;
  classNameOverlay?: string;
  children: ReactNode;
  title: string
}

const Modal = ({
  title,
  open,
  classNameContent,
  classNameOverlay,
  children,
  onClose,
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay
        className={cn("fixed inset-0     ", classNameOverlay)}
      />

      <Dialog.Title className="text-xl font-bold mb-4">
          {title}
        </Dialog.Title>

      <Dialog.Content className={cn(classNameContent)}>
        <button
          className="absolute right-0 top-0 outline-none "
          aria-label="Close"
          onClick={onClose}
        >
          <Cross2Icon className="h-7 w-7" />
        </button>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
