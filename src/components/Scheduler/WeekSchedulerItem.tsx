import React from 'react'

import FolderIcon from '../../assets/icons/folder.svg'
import MaratonouIcon from '../../assets/icons/maratonou.svg'

import { WeekScheduleItem } from './styles'

type schedulerItemType = {
  text?: string
  isMarathon?: boolean
  onClick?: Function
  dayId: number
  actualDayId: number
}

export default function WeekSchedulerItem(props:schedulerItemType) {
  const onClick = props.onClick ? props.onClick : (dayId:number) => {}

  let icon
  if(props.isMarathon) {
    icon = <MaratonouIcon width="100px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin"/>
  } else {
    icon = <FolderIcon width="100px" viewBox="228 333 130 105" preserveAspectRatio="xMinYMin"/>
  }

  return (
    <WeekScheduleItem selected={props.actualDayId === props.dayId} onClick={() => {
      onClick(props.dayId)
    }}>
      {icon}
      <span>
        {props.text}
      </span>
    </WeekScheduleItem>
  )
}
