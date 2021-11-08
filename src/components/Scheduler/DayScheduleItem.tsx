import React from 'react'

import { DayScheduleButton } from './styles'
import Window from '../Window'
import { colors } from '../../styles/colors'

export default function DayScheduleItem(props: any) {
  const lecture = props.lecture
  if(!lecture.time) {
    return null
  }

  const selected = props.actualLectureId === lecture.id

  const onClick = props.onClick ? props.onClick : (dayId:number) => {}
  return (
    <DayScheduleButton onClick={() => onClick(lecture.id)}>
      <Window 
        title={lecture.time} height={props.height}
        width={props.width} contentHeight='calc(100% - 55px)'
        backgroundColor={selected ? colors.background_highlight: ''}
        textAlign='center' removePadding
      >
        <p className="buttonText">
          {lecture.title}
        </p>
      </Window>
    </DayScheduleButton>
  )
}
