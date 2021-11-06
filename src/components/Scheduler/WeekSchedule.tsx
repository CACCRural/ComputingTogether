import React from 'react'

import MaratonouIcon from '../../assets/icons/maratonou.svg'
import { WeekScheluderGrid, WeekScheluderdiv, Maratonou, MaratonouText } from './styles'
import Window from '../Window'
import WeekSchedulerItem from './WeekSchedulerItem'

import getData, { getMaratonouLink } from '../../database'
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

function onClick() {
  const ref = getMaratonouLink()
  window.open(ref, "_blank")
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
      <Window title="Calendário" width='100%'
      height={scheduleHeight} contentHeight='calc(100% - 55px)' removePadding>
        <WeekScheluderGrid>
          {days}
        </WeekScheluderGrid>
      </Window>
      <Window title="Maratona" 
        width={maratonouWindowWidth} height={maratonouWindowHeight}
        contentHeight='calc(100% - 70px)'>
        <Maratonou onClick={() => onClick()}>
          <MaratonouIcon width="100px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin"/>
          <MaratonouText>
            <h1>Inscreva-se!</h1>
            <span>13/11 de 14:00 as 18:00</span>
          </MaratonouText>
        </Maratonou>
      </Window>
    </WeekScheluderdiv>
  )
}
