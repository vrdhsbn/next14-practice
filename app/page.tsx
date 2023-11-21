import { Box, Container } from '@/styled-system/jsx'
import { Heading } from './components/ui/Heading'
import { SubHeading } from './components/ui/SubHeading'
import { Form } from './components/model/Form'

export default function Home() {
  return (
    <Container maxW={'480px'} py={'64px'}>
      <Heading>Server Actions Demo</Heading>
      <Box mt={'24px'}>
        <SubHeading>Form</SubHeading>
        <Form />
      </Box>
    </Container>
  )
}
