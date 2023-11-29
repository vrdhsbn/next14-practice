'use client'
import { Box, Center, Grid, styled } from '@/styled-system/jsx'
import { SubmitButton } from '../ui/SubmitButton'
import { css } from '@/styled-system/css'
import { SwitchBox } from '../ui/SwitchBox'
import { DatePickerBox } from '../ui/DatePickerBox'
import { formAction } from '@/app/utils/formAction'
import { useFormState } from 'react-dom'

export const Form = () => {
  const initialState: Array<string> = []
  const [errors, dispatch] = useFormState(formAction, initialState)

  return (
    <form action={dispatch}>
      <Box mt={'8px'}>
        <styled.span color={'#f00'}>*</styled.span> は必須項目です
      </Box>
      {
        // エラーメッセージがあれば表示する
        errors.length > 0 && (
          <Box mt={'16px'} border={'solid 1px #f00'} p={'8px'} color={'#f00'}>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </Box>
        )
      }
      <Grid
        gridTemplateColumns={'120px 1fr'}
        rowGap={'24px'}
        mt={'16px'}
        alignItems={'center'}
      >
        <span>
          お名前 <styled.span color={'#f00'}>*</styled.span>
        </span>
        <input type='text' name='name' className={textInput} required />
        <span>
          フリガナ <styled.span color={'#f00'}>*</styled.span>
        </span>
        <input type='text' name='kana' className={textInput} required />
        <span>
          電話番号 <styled.span color={'#f00'}>*</styled.span>
        </span>
        <input
          type='text'
          name='tel'
          inputMode='tel'
          className={textInput}
          required
        />
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
