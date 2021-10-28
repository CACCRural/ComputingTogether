import React, { SyntheticEvent } from 'react'

import FolderIcon from '../../assets/icons/folder.svg'
import { ScheduleItem } from './styles'

function onClick(data:any) {
  console.log('teste')
  return (event:SyntheticEvent) => {}
}

export default function SchedulerItem(props:any) {
  return (
    <ScheduleItem onClick={() => onClick(props)}>
      <FolderIcon width="100px" viewBox="228 333 130 105" preserveAspectRatio="xMinYMin"/>
      <span>
        {props.text}
      </span>
    </ScheduleItem>
  )
}
