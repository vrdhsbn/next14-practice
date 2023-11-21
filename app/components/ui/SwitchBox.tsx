'use client'

import { Box } from '@/styled-system/jsx'
import { Switch } from '@ark-ui/react'
import { css } from '@/styled-system/css'

export const SwitchBox = ({
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) => {
  return (
    <Box>
      <Switch.Root name={name} className={switchRoot}>
        <Switch.Control className={control}>
          <Switch.Thumb className={thumb} />
        </Switch.Control>
        <Switch.Label>{children}</Switch.Label>
      </Switch.Root>
    </Box>
  )
}

const switchRoot = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

const control = css({
  display: 'inline-flex',
  alignItems: 'center',
  bg: '#999',
  w: '38px',
  h: '20px',
  borderRadius: '9px',
  cursor: 'pointer',
  pl: '1px',
  // Ark UI のコンポーネントの状態に応じて Panda CSS でスタイリングする方法
  '&[data-state="checked"]': { bg: '#3ecf8e' },
})

const thumb = css({
  bg: '#fff',
  w: '18px',
  h: '18px',
  borderRadius: '50%',
  transition: 'transform .1s ease',
  '&[data-state="checked"]': { transform: 'translate(100%)' },
})
