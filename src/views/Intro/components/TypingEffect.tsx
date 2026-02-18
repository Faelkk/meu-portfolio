import { useEffect, useState } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  typingDelay?: number;
};

const TypingEffect = ({
  text,
  speed = 100,
  eraseSpeed = 100,
  typingDelay = 500,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Digitando
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Espera antes de apagar
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, typingDelay);
      }
    } else {
      // Apagando
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, eraseSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, eraseSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, eraseSpeed, typingDelay]);

  return (
    <span className="text-[1.2rem] text-center text-blue-950 font-bold md:text-4xl w-full md:text-start">
      {displayedText}
      <span className="text-primary-750 pl-1 animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
