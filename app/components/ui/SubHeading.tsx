import { styled } from '@/styled-system/jsx'

export const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <styled.h2 fontSize={'20px'} fontWeight={700}>
      {children}
    </styled.h2>
  )
}
