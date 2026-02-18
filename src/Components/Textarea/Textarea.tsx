import { forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn/cn";


interface TextAreaProps {
  error: string | undefined;
  value?: string;
  name: string;
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, value, name, onChange }, ref) => {
    return (
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={(event) => onChange && onChange(event)}
          ref={ref}
          rows={3}
          placeholder="Escreva sua mensagem"
          className={cn(
            "outline-none  resize-none bg-gray-50 dark:bg-woodsmoke-900 p-2 rounded-md w-full border-gray-500 dark:border-woodsmoke-900 text-gray-800 dark:text-woodsmoke-400 focus:border-gray-800 transition-all  border placeholder:text-gray-800 dark:placeholder:text-gray-50 ",
            error && " border-red-900 focus:border-red-900"
          )}
        />

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className=" text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

export default Textarea;
