import React, { memo } from 'react'

import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import s from './BackTo.module.scss'

export const BackTo = memo(() => {
  const navigate = useNavigate()

  return (
    <Button
      className={s.backTo}
      onClick={() => navigate(-1)}
      icon={<ArrowLeftOutlined />}
      type="text"
    >
      Back
    </Button>
  )
})
