import React from 'react'

import { DaySchedulerGrid, DaySchedulerdiv } from './styles'
import DayScheduleItem from './DayScheduleItem'
import { getLecturesData } from '../../database'

const LECTURES_PER_DAY = 6

type DayScheduleProps = {
  dayId: number
  lectureId: number
  onClick: Function
}

function getLectures(dayId:number, lectureId:number, onClick: Function)  {
  const days:any[] = []

  const lectures = getLecturesData(dayId)
  let lecture = {}
  for(let lectureIndex=0; lectureIndex < LECTURES_PER_DAY; lectureIndex++) {
    lecture = lectures[lectureIndex] ? lectures[lectureIndex]: {}
    days.push(
      <DayScheduleItem 
        key={`lecture_${dayId}_${lectureIndex}`}
        lecture={lecture}
        actualLectureId={lectureId}
        height="100%"
        width="100%"
        onClick={onClick}/>
    )
  }

  return days
}

export default function DaySchedule(props:DayScheduleProps) {
  const dayLectures = getLectures(props.dayId, props.lectureId, props.onClick)

  return (
    <DaySchedulerdiv>
      <DaySchedulerGrid>
        {dayLectures}
      </DaySchedulerGrid>
    </DaySchedulerdiv>
  )
}
