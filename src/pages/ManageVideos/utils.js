import { z } from "zod";
// Form Validation
export const newValidationSchema = z
  .object({
    name: z
      .string({ required_error: "O nome é obrigatório" })
      .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
      .max(60, { message: "O nome não pode exceder 60 caracteres" }),

    shortDescription: z
      .string({ required_error: "A descrição curta é obrigatória" })
      .min(2, { message: "A descrição curta deve ter pelo menos 2 caracteres" })
      .max(60, { message: "A descrição curta não pode exceder 60 caracteres" }),

    longDescription: z
      .string({ required_error: "A descrição é obrigatória" })
      .min(20, {
        message: "A descrição longa deve ter pelo menos 20 caracteres",
      })
      .max(500, {
        message: "A descrição longa não pode exceder 500 caracteres",
      }),

    link: z
      .string({ required_error: "O link é obrigatório" })
      .min(1, { message: "O link não pode estár vazio" }),
    
    acceptTerms: z.boolean().refine((val) => val === true, { message: "Você deve aceitar os termos e condições" }),

    select: z.string().nonempty("Não deixe essa opção vazia"),
  })
  .nonstrict();
