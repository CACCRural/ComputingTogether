import React from 'react'

import { DayScheduleButton } from './styles'
import Window from '../Window'

export default function DayScheduleItem(props: any) {
  const lecture = props.lecture
  if(!lecture.time) {
    return null
  }

  const onClick = props.onClick ? props.onClick : (dayId:number) => {}
  return (
    <DayScheduleButton onClick={() => onClick(lecture.id)}>
      <Window title={lecture.time} height={props.height} width={props.width} titleSize="1.7vw">
          {lecture.title}
      </Window>
    </DayScheduleButton>
  )
}
