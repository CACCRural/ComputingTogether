export type Lecture = {
  time: string
  description: string
  speakers: string[]
  images: string[]
}

export type Schedule = {
  title: string
  date: Date
  lectures: Lecture[]
}

export type WindowProps = {
  title: string
  children?: any|any[]
  height: string
  width: string
  ContentHeight?: string
  ContentWidth?: string
}

