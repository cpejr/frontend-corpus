import { z } from 'zod';

export const validationSchema = z.object({
  email: z
    .string({ required_error: "A email é obrigatório" })
    .min(1, 'Favor digitar o email')
    .email('Insira um email no formato email@email.com'),
});