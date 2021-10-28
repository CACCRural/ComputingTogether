import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { MaxWidth } from '../../styles'

export const ScheluderDiv = styled.div`
	background-image: url('../../assets/background/CT_background.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${colors.green};
	height: 1000px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;

	@media (max-width: ${MaxWidth}) {
		display: flex;
		flex-direction: column;
	}
`

export const WeekScheluderdiv = styled.section`
	width: 30%;
	height: 80%;

	@media (max-width: ${MaxWidth}) {
		width: 100%;
		margin-right: 10px;
	}
`

export const WeekScheluderGrid = styled.section`
  display: grid;
	height: 100%;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	gap: 0px;

	@media (max-width: ${MaxWidth}) {
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}
`

export const ScheduleItem = styled.button`
  display: flex;
	background: none;
	border: none;
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