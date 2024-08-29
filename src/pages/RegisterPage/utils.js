import { z } from "zod";

// Regex para validar o formato DD/MM/YYYY
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

// Função para verificar se a data é válida
const isValidDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

  export const validationSchemaRegister = z
  .object({
    name: z
      .string({ required_error: "O nome é obrigatório" })
      .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
      .max(60, { message: "O nome não pode exceder 60 caracteres" }),
    
    birthday: z
      .string({ required_error: "A data de nascimento é obrigatória" })
      .refine((value) => dateRegex.test(value), {
        message: "Selecione uma data de nascimento",
      })
      .refine(isValidDate, {
        message: "Data de nascimento inválida",
      }),

    email: z
      .string({ required_error: "A email é obrigatório" })
      .min(1, "Insira um e-mail!")
      .email("O email deve ser válido!"),

    password: z
      .string({ required_error: "A senha é obrigatória" })
      .min(4, {
        message: "Senha do usuário precisa ter pelo menos 4 caracteres!",
      })
      .max(16, {
        message: "Senha do usuário não pode ultrapassar 16 caracteres",
      }),

    phone: z
      .string({ required_error: "O telefone é obrigatório" })
      .min(13, { message: "Coloque um número de telefone válido" })
      .max(13, { message: "Coloque um número de telefone válido" }),

    acceptTerms: z.boolean().refine((val) => val === true, { message: "Você deve aceitar os termos e condições" }),
  });

  export const validationSchemaLogin = z
  .object({
    email: z
      .string({ required_error: "Insira um e-mail!" })
      .min(1, {message: "Preencha o campo e-mail!"})
      .email("Insira um email válido!"),

    password: z
      .string({ required_error: "Insira uma senha!" })
      .min(1, {message: "Preencha o campo senha!"}),
  });