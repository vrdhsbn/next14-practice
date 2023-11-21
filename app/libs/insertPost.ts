import { sql } from '@vercel/postgres'

// DBにフォーム送信データを挿入する
// ToDo: バリデーション、サニタイズ
export const insertPost = async (formData: FormData) => {
  const _name = formData.get('name')?.toString()
  const _kana = formData.get('kana')?.toString()
  const _tel = formData.get('tel')?.toString()
  const _date = formData.get('date')?.toString().replaceAll('/', '-')
  const _receiveMail = formData.get('receiveMail')?.toString() ? true : false

  await sql`INSERT INTO table1
    (
      name,
      kana,
      tel,
      date,
      receiveMail
    )
    VALUES (
      ${_name},
      ${_kana},
      ${_tel},
      ${_date},
      ${_receiveMail}
    );`
}
