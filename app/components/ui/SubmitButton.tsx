import { styled } from '@/styled-system/jsx'

export const SubmitButton = () => {
  return (
    <styled.input
      type='submit'
      value='送信'
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
      transition={'background .2s ease'}
    />
  )
}
