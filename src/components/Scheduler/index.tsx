import React from 'react'

import DaySchedule from './DaySchedule'
import WeekSchedule from './WeekSchedule'

import { ScheluderDiv } from './styles'


export default function Footer() {
  return (
    <ScheluderDiv id="schedule">
      <WeekSchedule />
      <DaySchedule />
      <div>
        aaaaaaaaaaaaaaaaaaaa
      </div>
    </ScheluderDiv>
  )
}
