import z from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  name: z.string().min(3).optional(),
});

export default schema;
