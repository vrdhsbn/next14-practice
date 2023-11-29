'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { insertPost } from './insertPost'
import { formValidation } from './formValidation'

export const formAction = async (state: Array<string>, formData: FormData) => {
  // バリデーション
  const errors = await formValidation(formData)

  // エラーがあればエラー表示、無ければDBに登録
  if (errors) {
    return errors
  } else {
    await insertPost(formData)
    console.log('send!')
    revalidatePath('/')
    revalidatePath('/thanks')
    redirect('/thanks')
    // root(/)とthanks両方をrevalidateしていることに注意。
    // rootをrevalidateしないと、もし前回と同じ内容がフォーム送信された場合にキャッシュが効いてDBへの登録が無視される（保存されない）。
    // thanksをrevalidateしないと、「送信履歴」が毎回同じ内容（キャッシュされた内容）で表示される。
  }
}
