'use server';
import { z } from 'zod';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';

const FormUserSchema = z.object({
    id: z.string(),
    name: z.string()
    .min(3,{
        message:"Debe tener 4 o más caracteres",
    }),
    email: z.string().email({
        message: 'Ingrese un email invalido',
    }),
    password: z.string().min(6,{
        message:'Debe tener 6 o más caracteres',
    }),
    // repassword: z.string({
    //     invalid_type_error: 'Porfavor confirme la contraseña.',
    // }),
    // name: z.string({
    //     required_error: "El nombre es requerido.",
    //     invalid_type_error: 'El nombre debe ser texto.',
    // }),
    // email: z.string({
    //     required_error: "El email es requerido.",
    // }).email({ message: "Invalid email address" }),
    // password: z.string({
    //     required_error: "El password es requerido.",
    // }).min(6,{message:"Minimo 6 caracteres."}),
  });
const CreateUser = FormUserSchema.omit({ id: true,});

export type State = {
    errors?: {
      name?: string[];
      email?: string[];
      password?: string[];
      repassword?: string[];
    };
    message?: string | null;
};

export async function createUser(prevState: State, formData: FormData) {


    // if(formData.get('password') !== formData.get('repassword')){
    //     console.log('pass no coinciden.')
    //     return {
    //         errors: 'confirmPass',
    //         message: 'Contraseñas no coinciden.',
    //         };
    // }

    // Validate form fields using Zod
    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email:formData.get('email'),
        password: formData.get('password'),
      });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Campos faltantes. No se pudo crear el usuario.',
        };
    }

    if(formData.get('password') !== formData.get('repassword')){
        return {
            errors: {
                repassword:['Contraseñan no coinciden']
            },
            message: 'Campos faltantes. No se pudo crear el usuario.',
            };
    }

    // Prepare data for insertion into the database
    const { name, email, password } = validatedFields.data;

    // Insert data into the database
    try {
        await sql`
            INSERT INTO users (name, email, password)
            VALUES (${name}, ${email}, ${password})
        `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        return {
            message: 'Error de base de datos: No se pudo crear el usuario.',
          };
    }
    // Revalidate the cache for the invoices page and redirect the user.
    // revalidatePath('/dashboard/invoices');
    redirect('/login');
}


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        console.log('formData');
        console.log(formData);
        await signIn('credentials', formData);
    } catch (error) {
        console.log('error login pog....',error);
        if (error instanceof AuthError) {
        switch (error.type) {
            case 'CredentialsSignin':
            return 'Invalid credentials.';
            default:
            return 'Something went wrong.';
        }
        }
        throw error;
    }
}

export async function logOut(){
    await signOut();
}