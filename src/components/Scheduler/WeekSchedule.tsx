import React from 'react'

import { WeekScheluderGrid, WeekScheluderdiv } from './styles'
import Window from '../Window'
import SchedulerItem from './SchedulerItem'

export default function WeekScheluder() {
  return (
    <WeekScheluderdiv>
      <Window title="Calendário" width='100%' height='80%' ContentHeight='85%'>
        <WeekScheluderGrid>
          <SchedulerItem text="08/11"/>
          <SchedulerItem text="09/11"/>
          <SchedulerItem text="10/11"/>
          <SchedulerItem text="08/11"/>
          <SchedulerItem text="09/11"/>
          <SchedulerItem text="10/11"/>
        </WeekScheluderGrid>
      </Window>
    </WeekScheluderdiv>
  )
}