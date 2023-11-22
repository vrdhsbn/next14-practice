'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { insertPost } from '../libs/insertPost'
import { formValidation } from '../libs/formValidation'

export const formAction = async (formData: FormData) => {
  // これ全体をtry-catchで書けたらもうちょっとすっきりしそうな気がする

  // バリデーション
  const errors = await formValidation(formData)

  // エラーがあればエラー表示、無ければDBに登録
  if (errors) {
    // フロントにエラーを表示するには？useFormStateを使えばできるみたい？
    console.log(errors)
  } else {
    // await insertPost(formData)
    console.log('send!')
    revalidatePath('/thanks')
    redirect('/thanks')
  }
}
