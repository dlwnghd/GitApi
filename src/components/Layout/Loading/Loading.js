import React from 'react'
import styled from 'styled-components'
import './Loading.css'

const Loading = () => {
	return (
		<Area>
			<div className="spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Area>
	)
}

export default Loading

const Area = styled.div`
	width: 100%;
	margin: 20px 20px;
	min-height: 900px;
	align-content: center;
	display: inline-grid;
	justify-content: center;
`
