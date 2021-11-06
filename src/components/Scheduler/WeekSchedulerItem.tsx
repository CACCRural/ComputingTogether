import React from 'react'

import FolderIcon from '../../assets/icons/folder.svg'

import { WeekScheduleItem } from './styles'

type schedulerItemType = {
  text?: string
  isMaratonou?: boolean
  onClick?: Function
  dayId: number
  actualDayId: number
}

export default function WeekSchedulerItem(props:schedulerItemType) {
  const onClick = props.onClick ? props.onClick : (dayId:number) => {}

  return (
    <WeekScheduleItem selected={props.actualDayId === props.dayId} onClick={() => {
      onClick(props.dayId)
    }}>
      <FolderIcon width="100px" viewBox="228 333 130 105" preserveAspectRatio="xMinYMin"/>
      <span>
        {props.text}
      </span>
    </WeekScheduleItem>
  )
}
