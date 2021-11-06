import React, { useState } from 'react'

import DaySchedule from './DaySchedule'
import WeekSchedule from './WeekSchedule'
import LectureInfo from './lectureInfo'

import { ScheluderDiv } from './styles'
import { getfirstLecture } from '../../database'

const DEFAULT_DAY_ID = 2
const DEFAULT_LECTURE_ID = 200

export default function Schedule(): React.ReactElement {
  const [dayId, setDayID] = useState(DEFAULT_DAY_ID)
  const [lectureId, setLectureID] = useState(DEFAULT_LECTURE_ID)

  const onClick = (newDayID: number) => {
    setDayID(newDayID)
    const firstLecture = getfirstLecture(newDayID)
    setLectureID(firstLecture.id ? firstLecture.id: DEFAULT_LECTURE_ID)
  }

  const LectureOnClick = (newLectureID: number) => {
    setLectureID(newLectureID)
  }

  return (
    <ScheluderDiv id="schedule">
      <WeekSchedule onClick={onClick} dayId={dayId}/>
      <DaySchedule onClick={LectureOnClick} dayId={dayId} lectureId={lectureId}/>
      <LectureInfo dayId={dayId} lectureId={lectureId}/>
    </ScheluderDiv>
  )
}
