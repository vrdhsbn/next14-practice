import { styled } from '@/styled-system/jsx'

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <styled.h1 fontSize={'24px'} fontWeight={700}>
      {children}
    </styled.h1>
  )
}
