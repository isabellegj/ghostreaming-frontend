import Input from "@/components/Formin/Input";
import { useForm } from "react-hook-form";

interface IFormInput {
  nome: string;
  email: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  return (
    <div>
      <Input label="oi" name="nome" register={register} />
    </div>
  );
}
