import { Lecture } from '../types'
import { scheduleData, links } from './data'
/*
* Essa função existe para ser facilmente adicionado um novo local com as informações
* das palestras
*/
export default function getData() {
  return scheduleData
}

export function getLecturesData(dayId: number) {
  const data = getData().filter(schedule => schedule.id === dayId)
  return data[0] ? data[0].lectures : []
}

export function getfirstLecture(dayID: number): Lecture {
  const day = getData().filter(schedule => schedule.id === dayID)[0]
  const lectures = day?.lectures

  return lectures[0]
}

export function getMaratonouLink() { 
  return links.maratonou
}