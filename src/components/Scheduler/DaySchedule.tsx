import React from 'react'

import { DaySchedulerGrid, DaySchedulerdiv } from './styles'
import DayScheduleItem from './DayScheduleItem'
import getData from '../../database'

const LECTURES_PER_DAY = 6

type DayScheduleProps = {
  dayId: number
  lectureId: number
  onClick: Function
}

function getLecturesData(dayId: number) {
  const data = getData().filter(schedule => schedule.id === dayId)
  return data[0] ? data[0].lectures : []
}

function getLectures(dayId:number, onClick: Function)  {
  const days:any[] = []

  const lectures = getLecturesData(dayId)
  let lecture = {}
  for(let lecturIndex=0; lecturIndex < LECTURES_PER_DAY; lecturIndex++) {
    lecture = lectures[lecturIndex] ? lectures[lecturIndex]: {}
    days.push(
      <DayScheduleItem 
        key={`lecture_${dayId}_${lecturIndex}`}
        lecture={lecture}
        height="100%"
        width="100%"
        onClick={onClick}/>
    )
  }

  return days
}

export default function DaySchedule(props:DayScheduleProps) {
  const dayLectures = getLectures(props.dayId, props.onClick)

  return (
    <DaySchedulerdiv>
      <DaySchedulerGrid>
        {dayLectures}
      </DaySchedulerGrid>
    </DaySchedulerdiv>
  )
}
