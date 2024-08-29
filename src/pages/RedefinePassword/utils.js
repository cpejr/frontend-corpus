import { z } from 'zod';

export const validationSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, 'A senha não pode ter menos de 6 caracteres')
      .max(16, 'A senha não pode ter mais de 16 caracteres'),

    confirmation: z.string().min(1, 'Confirme sua senha'),
  })
  .refine((data) => data.newPassword === data.confirmation, {
    path: ['confirmation'],
    message: 'Senhas não coincidem',
  });