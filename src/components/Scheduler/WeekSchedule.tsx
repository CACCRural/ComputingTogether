import React from 'react'

import MaratonouIcon from '../../assets/icons/maratonou.svg'
import { WeekScheluderGrid, WeekScheluderdiv, Maratonou } from './styles'
import Window from '../Window'
import WeekSchedulerItem from './WeekSchedulerItem'

import getData from '../../database'
import { Schedule } from "../../types";

import { MaxWidth } from '../../styles'

function getDays(onClick: Function, dayId: number)  {
  const days:any[] = []

  getData().forEach((dayData:Schedule) => {
    days.push(
      <WeekSchedulerItem
        key={`day_${dayData.id}`}
        text={dayData.title}
        onClick={onClick}
        dayId={dayData.id}
        actualDayId={dayId}
        isMarathon={dayData.isMarathon}
      />
    )
  })

  return days
}

export default function WeekScheluder(props:any) {
  const days = getDays(props.onClick,  props.dayId)

  let maratonouWindowWidth = '90%'
  let maratonouWindowHeight = '20%'
  let scheduleHeight = '60%'

  if((window.innerWidth) <= parseInt(MaxWidth.slice(0, -2))) {
    maratonouWindowWidth = '85%'
    maratonouWindowHeight = '180px'
    scheduleHeight = 'unset'
  }

  return (
    <WeekScheluderdiv>
      <Window title="Calendário" width='100%' height={scheduleHeight} contentHeight='85%'>
        <WeekScheluderGrid>
          {days}
        </WeekScheluderGrid>
      </Window>
      <Window title="Maratona" 
        width={maratonouWindowWidth} height={maratonouWindowHeight}
        contentHeight='calc(100% - 70px)'>
        <Maratonou>
          <MaratonouIcon width="100px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin"/>
          <div>
            <h1>Inscreva-se!</h1>
            <span>xx/xx à xx/xx</span>
          </div>
        </Maratonou>
      </Window>
    </WeekScheluderdiv>
  )
}
