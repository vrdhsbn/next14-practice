'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { insertPost } from '../libs/insertPost'

export const formAction = async (formData: FormData) => {
  await insertPost(formData)
  console.log('send!')
  // revalidatePath('/thanks')
  redirect('/thanks')
}
