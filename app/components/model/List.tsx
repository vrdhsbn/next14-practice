import { styled } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'
import { getPosts } from '../../libs/getPosts'

type postType = {
  id: number
  name: string
  kana: string
  tel: string
  date: string
  receivemail: boolean
}

export const List = async () => {
  const posts = (await getPosts()) as postType[]

  return (
    <styled.table w={'100%'} mt={'10px'}>
      <thead>
        <tr className={tableCellHeader}>
          <th>id</th>
          <th>name</th>
          <th>kana</th>
          <th>date</th>
          <th>tel</th>
          <th>receive</th>
        </tr>
      </thead>
      <tbody>
        {posts.reverse().map((post: postType) => (
          <tr key={post.id} className={tableCell}>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.kana}</td>
            <td>{post.date}</td>
            <td>{post.tel}</td>
            <td>{post.receivemail.toString()}</td>
          </tr>
        ))}
      </tbody>
    </styled.table>
  )
}

const tableCellHeader = css({
  '& th': { p: '8px 4px', textAlign: 'center', fontWeight: '700' },
})

const tableCell = css({
  '& td': { p: '8px 4px', textAlign: 'center' },
})
