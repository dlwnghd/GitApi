import styled from 'styled-components'

function HomePage() {
	return (
		<>
			<S.Wrapper>
				<h1>Github Search Issue 입니다.</h1>
				<p>
					깃허브 레포지토리 주소를 입력하면 해당 레포지토리의 Issue를 확인하실
					수 있습니다!
				</p>
				<S.Image src={`${process.env.REACT_APP_PUBLIC_URL}/howToUseExample.png`} alt="예시 이미지"/>
			</S.Wrapper>
		</>
	)
}
export default HomePage

const Wrapper = styled.div`
	text-align: center;
`

const Image = styled.img`
	width: 100vh;
`

const S = {
	Wrapper,
	Image,
}
