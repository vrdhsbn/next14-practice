import { z } from 'zod'

export const formValidation = async (formData: FormData) => {
  const pattern_tel = /^0[0-9]+/

  const schema = z.object({
    name: z.string().max(10, { message: 'お名前は最大10文字までです' }),
    kana: z.string().max(20, { message: 'フリガナは最大20文字までです' }),
    tel: z
      .string()
      .regex(pattern_tel, { message: '電話番号が不正です' })
      .max(11, { message: '電話番号は最大11桁までです' }),
    date: z.string().max(10).optional(),
    receiveMail: z.string().nullable(),
  })

  const result = schema.safeParse({
    name: formData.get('name'),
    kana: formData.get('kana'),
    tel: formData.get('tel'),
    date: formData.get('date'),
    receiveMail: formData.get('receiveMail'),
  })

  // バリデーションエラーがあればエラー一覧を返す
  if (!result.success) {
    return result.error.issues.map((issue) => {
      return issue.message
    })
  }
}
