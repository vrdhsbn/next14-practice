'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { insertPost } from '../libs/insertPost'
import { formValidation } from '../libs/formValidation'

export const formAction = async (state: Array<string>, formData: FormData) => {
  // バリデーション
  const errors = await formValidation(formData)

  // エラーがあればエラー表示、無ければDBに登録
  if (errors) {
    return errors
  } else {
    await insertPost(formData)
    console.log('send!')
    revalidatePath('/thanks')
    redirect('/thanks')
  }
}
