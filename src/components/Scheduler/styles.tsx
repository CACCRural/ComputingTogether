import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { MaxWidth } from '../../styles'
import background from '../../assets/background/CT_background.png'

export const ScheluderDiv = styled.div`
	background-image: url(${background});
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
		height: fit-content;
		padding-bottom: 20px;
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

export const MaratonouText = styled.div`
	font-family: Calling Regular;
	
	h1 {
		border-bottom: 5px;
		margin-block-start: 0;
    margin-block-end: 0;
	}

	span {
		font-family: Outfit Regular;
	}
	@media (max-width: ${MaxWidth}) {
	}
`

export const DaySchedulerdiv = styled.div`
	height: 90%;
	width: 35%;

	@media (max-width: ${MaxWidth}) {
		width: 90%;
	}
`

export const DaySchedulerGrid = styled.section`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	row-gap: 1%;
	column-gap: 3%;
	height: 100%;

	@media (max-width: ${MaxWidth}) {
		width: 100%;
		row-gap: 40px;
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
	font-size: 120%;

	@media (max-width: ${MaxWidth}) {
		font-size: 120%;
		min-height: 300px;
	}

	@media (min-width: 2500px) {
		font-size: 180%;
		text-align: center;
	}

	.buttonText {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const LectureInfoDiv = styled.div`
	height: 80%;
	width: 25%;
	padding: 20px 0px 20px 0px;

	@media (max-width: ${MaxWidth}) {
		width: 90%;
	}
`

export const LectureContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`

type ImageDiv = {
	image: string;
}

export const SpeakerImage = styled.div<ImageDiv>`
	height: 150px;
	width: 150px;
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: ${colors.blue};

	border-style : Solid;
	border-color : ${colors.text};
	border-width : 1px;
	border-radius: 100px 100px 100px 100px;
	-moz-border-radius : 100px 100px 100px 100px;
	-webkit-border-radius : 100px 100px 100px 100px;
  box-shadow: 3px 2.5px ${colors.text};
`

export const SpeakerContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items : center;
	justify-content : space-between;
	height: 200px;
`

type speakersDivtype = {
	useColumn: boolean;
}

export const SpeakersDiv = styled.div<speakersDivtype>`
	display: flex;
	align-items : center;
	${ props => {
		if(props.useColumn) {
			return 'justify-content : center; flex-direction: column;'
		}	else {
			return 'justify-content : space-evenly; flex-direction: row;'
		}
	}};
	width: 90%;
	max-height: 30%;
	border-bottom: 1px solid white;
	margin-bottom: 5%;

	@media(max-width: ${MaxWidth}) {
		margin-top: 20px;
	}
`

export const SpeakersHeader = styled.h2`
	color: white;
	margin-block-start: 0px;
  margin-block-end: 0px;
`

export const LectureDescription = styled.p`
	color: white;
	padding: 0px 25px 0px 25px;
	margin-bottom: 10%;
	overflow: auto;
`

export const LogoImage = styled.div<ImageDiv>`
	border-style: Solid;
	border-color: ${colors.text};
	border-width: 2px;
	border-radius: 30px 30px 30px 30px;
	-moz-border-radius: 30px 30px 30px 30px;
	-webkit-border-radius: 30px 30px 30px 30px;
  box-shadow: 4px 4px ${colors.text};
	height: 120px;
	width: 150px;
	background-image: url(${props => props.image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	background-color: ${colors.background};
	margin-bottom: 40px;
`
