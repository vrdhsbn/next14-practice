import { Container, Box } from '@/styled-system/jsx'
import { Heading } from '../components/ui/Heading'
import { getPosts } from '../libs/getPosts'
import { List, postType } from '../components/model/List'

export default async function Thanks() {
  const posts = (await getPosts()) as postType[]

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
        <List posts={posts} />
      </Box>
    </Container>
  )
}
