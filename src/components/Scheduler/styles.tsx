import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { MaxWidth } from '../../styles'

export const ScheluderDiv = styled.div`
	background-image: url('../../assets/background/CT_background.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${colors.green};
	height: 100vh;
  width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (max-width: ${MaxWidth}) {
		display: flex;
		flex-direction: column;
		height: 250vh;
	}
`

export const WeekScheluderdiv = styled.div`
	width: 30%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin-left: 20px;

	@media (max-width: ${MaxWidth}) {
		width: 95%;
		height: 500px;
		margin-top: 15px;
		margin-bottom: 30px;
		margin-left: 0px;
		align-items: center;
		
	}
`

export const WeekScheluderGrid = styled.section`
  display: grid;
	height: 100%;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	gap: 0px;

	@media (max-width: ${MaxWidth}) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}
`

type WeekScheduleItemType = {
	selected: Boolean
}

export const WeekScheduleItem = styled.button<WeekScheduleItemType>`
  display: flex;
	background: none;
	border: none;
	background-color: ${props => {
		if(props.selected) {
			return colors.background_highlight
		} else
			return "none";
	}};
  flex-direction: column;
  align-items: center;
  color: ${colors['text']};
  text-decoration: none;
  font-family: Outfit Regular;
	font-size: 2.5vw;

	@media (min-width: 2500px) {
		font-size: 1.5vw;
	}

	@media (max-width: ${MaxWidth}) {
		font-size: 3.5vw;
	}
`

export const Maratonou = styled.button`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: none;
	border: none;
	height: 100%;
	width: 100%;

	font-family: Calling Regular;
	font-size: 1vw;
`

export const DaySchedulerdiv = styled.div`
	height: 90%;
	width: 35%;

	@media (max-width: ${MaxWidth}) {
		width: 90%;
		height: 90vh;
	}
`

export const DaySchedulerGrid = styled.section`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	row-gap: 8%;
	column-gap: 3%;
	height: 100%;

	@media (max-width: ${MaxWidth}) {
		width: 100%;
		row-gap: 4vh;
		margin-right: 10px;
	}
`

export const DayScheduleButton = styled.button`
  display: flex;
	background: none;
	border: none;
  flex-direction: column;
  align-items: center;
  color: ${colors['text']};
  text-decoration: none;
	font-size: 1vw;

	@media (min-width: 2500px) {
		font-size: 1.5vw;
	}

	@media (max-width: ${MaxWidth}) {
		font-size: 3.5vw;
		height: 90vh;
	}
`

export const LectureInfoDiv = styled.div`
	height: 70%;
	width: 25%;
`

export const LectureContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

type ImageDiv = {
	image: string;
}

export const SpeakerImage = styled.div<ImageDiv>`
	height: 100px;
	width: 100px;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: ${colors.blue};

	border-style : Solid;
	border-color : ${colors.text};
	border-width : 1px;
	border-radius: 50px 50px 50px 50px;
	-moz-border-radius : 50px 50px 50px 50px;
	-webkit-border-radius : 50px 50px 50px 50px;
  box-shadow: 3px 2.5px ${colors.text};

`

export const SpeakersHeader = styled.h2`
	color: white;
	border-bottom: 1px solid white;
`

export const LectureDescription = styled.p`
	color: white;
`

export const LogoImage = styled.div<ImageDiv>`
	border-style: Solid;
	border-color: ${colors.text};
	border-width: 2px;
	border-radius: 30px 30px 30px 30px;
	-moz-border-radius: 30px 30px 30px 30px;
	-webkit-border-radius: 30px 30px 30px 30px;
  box-shadow: 4px 4px ${colors.text};
	height: 100px;
	width: 130px;
	background-image: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: ${colors.background};
`
