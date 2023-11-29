'use client'
import { styled } from '@/styled-system/jsx'
import { useFormStatus } from 'react-dom'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <styled.input
      type='submit'
      value='送信'
      disabled={pending}
      w={'120px'}
      background={'#3ecf8e'}
      color={'#fff'}
      fontWeight={700}
      p={'8px 24px'}
      border={'solid 1px #3ecf8e'}
      borderRadius={'8px'}
      cursor={'pointer'}
      _hover={{
        background: '#087242',
      }}
      _disabled={{
        border: 'solid 1px #999',
        background: '#333',
        _hover: {
          background: '#333',
          cursor: 'not-allowed',
        },
      }}
      transition={'background .2s ease'}
    />
  )
}
