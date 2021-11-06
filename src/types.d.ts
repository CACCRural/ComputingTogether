export type Lecture = {
  id: number
  title: string
  time: string
  description: string
  speakers: string[]
  speakersImage: string[]
  logoImage: string
}

export type Schedule = {
  id: number
  title: string
  date: Date
  lectures: Lecture[]
}

export type WindowProps = {
  title: string
  titleSize?: string
  children?: any|any[]
  height: string
  width: string
  contentHeight?: string
  contentWidth?: string
  contentTextAlign?: string
  contentBackgroundColor?: string
  removePadding?: boolean
}

