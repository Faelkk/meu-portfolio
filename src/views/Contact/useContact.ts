import { z } from "zod";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const schema = z.object({
  user_name: z.string().nonempty("Nome é obrigatório"),
  user_email: z.string().nonempty("Email é obrigatório").email(),
  message: z.string().nonempty("Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const useContact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    control,
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Dados enviados:", data);

      if (formRef.current) {
         await emailjs.sendForm(
          "achfaelMessage",
          "template_y1py0zq",
          formRef.current,
          "_FXMz8RtEJZw6v39w"
        );
      }

      toast.success("Email enviado com sucesso");
      reset();
    } catch  {
      toast.error("Erro ao enviar email");
    }
  };

  return {
    control,
    register,
    errors,
    handleSubmit,
    hookFormSubmit,
    formRef,
  };
};

export default useContact;
