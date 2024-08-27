import { z } from "zod";

export const validationSchema = z
  .object({
    name: z
      .string({ required_error: "O nome é obrigatório" })
      .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
      .max(60, { message: "O nome não pode exceder 60 caracteres" }),

    email: z
      .string({ required_error: "A email é obrigatório" })
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
  });