import { Container, Box, styled } from '@/styled-system/jsx'
import { Heading } from '../components/ui/Heading'
import { List } from '../components/model/List'
import { Suspense } from 'react'

export default async function Thanks() {
  return (
    <Container maxW={'600px'} py={'64px'}>
      <Heading>Thanks!</Heading>
      <Box mt={'24px'}>
        <p>フォームの内容が送信されました</p>
      </Box>
      <Box mt={'8px'}>
        <p>
          <a href='/'>Back to Top</a>
        </p>
      </Box>
      <Box mt={'32px'} pt={'32px'} borderTop={'solid 1px #999'}>
        <Heading>送信履歴</Heading>
        <Suspense fallback={<styled.p mt={'10px'}>Loading...</styled.p>}>
          <List />
        </Suspense>
      </Box>
    </Container>
  )
}
