import { z } from 'zod'

export const formValidation = async (formData: FormData) => {
  const schema = z.object({
    name: z.string().max(20),
    kana: z.string().max(20),
    tel: z.string().max(20),
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
