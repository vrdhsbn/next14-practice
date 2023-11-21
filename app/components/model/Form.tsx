import { Box, Center, Grid } from '@/styled-system/jsx'
import { SubmitButton } from '../ui/SubmitButton'
import { css } from '@/styled-system/css'
import { SwitchBox } from '../ui/SwitchBox'
import { DatePickerBox } from '../ui/DatePickerBox'
import { formAction } from '@/app/utils/formAction'

export const Form = () => {
  return (
    <form action={formAction}>
      <Grid
        gridTemplateColumns={'120px 1fr'}
        rowGap={'24px'}
        mt={'16px'}
        alignItems={'center'}
      >
        <span>お名前</span>
        <input type='text' name='name' className={textInput} />
        <span>フリガナ</span>
        <input type='text' name='kana' className={textInput} />
        <span>電話番号</span>
        <input type='text' name='tel' inputMode='tel' className={textInput} />
        <span>配達希望日</span>
        <DatePickerBox />
        <span>通知</span>
        <SwitchBox name='receiveMail'>メールでの通知を希望する</SwitchBox>
      </Grid>
      <Center mt={'32px'}>
        <SubmitButton />
      </Center>
    </form>
  )
}

export const textInput = css({
  color: '#333',
  p: '8px',
  borderRadius: '4px',
  width: '240px',
})
