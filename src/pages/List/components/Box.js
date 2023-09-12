/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
	FlexAlignCSS,
	FlexColumnCSS,
	HoverCSS,
	ShadowCSS,
} from '../../../styles/common'
import { BsChat } from 'react-icons/bs'
import remarkGfm from 'remark-gfm'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIssue } from 'store/issue'

function IssueBox({
	owner,
	repository,
	number,
	title,
	body,
	commentLen,
	updatedAt,
}) {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// 카드 클릭 => 상세페이지로 이동
	const ClickCard = id => {
		dispatch(getIssue({ owner, repository, id }))
		navigate(`/${owner}/${repository}/${id}`)
	}

	return (
		<S.Wrapper onClick={() => ClickCard(number)}>
			<S.LineContainer
				css={css`
					align-items: flex-start;
				`}
			>
				<S.BoldText>🌎 {number}</S.BoldText>
				<S.Title
					css={css`
						margin-left: 20px;
					`}
				>
					{title}
				</S.Title>
			</S.LineContainer>
			<S.ContentBox>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
				<S.LineContainerEnd
					css={css`
						margin-top: 30px;
					`}
				>
					<S.SmallText>last updated : {updatedAt}</S.SmallText>
					<S.IconBox
						css={css`
							margin-left: 10px;
						`}
					>
						<BsChat size={19} />
					</S.IconBox>
					<S.Text
						css={css`
							margin-left: 3px;
						`}
					>
						{commentLen}
					</S.Text>
				</S.LineContainerEnd>
			</S.ContentBox>
		</S.Wrapper>
	)
}
export default IssueBox

const Wrapper = styled.div`
	${FlexColumnCSS}
	width: 100%;
	background-color: var(--color-light-purple);
	${ShadowCSS}
	margin: 10px 0;
	border-radius: 10px;
	padding: 20px;
	${HoverCSS}
	:hover {
		background-color: var(--color-purple);
	}
`
const LineContainer = styled.div`
	${FlexAlignCSS}
`
const LineContainerEnd = styled.div`
	${FlexAlignCSS}
	justify-content: flex-end;
`
const ContentBox = styled.div`
	padding: 0 40px;
	margin-top: 20px;
	font-size: 14px;
`
const Text = styled.div`
	font-size: 18px;
`
const SmallText = styled.div`
	font: 14px;
`
const BoldText = styled(Text)`
	font-weight: bold;
	width: 10%;
	@media screen and (max-width: 1500px) {
		font-size: 16px;
	}
	@media screen and (max-width: 770px) {
		font-size: 14px;
	}
`
const Title = styled(Text)`
	font-weight: bold;
`
const IconBox = styled.div`
	${HoverCSS}
	padding: 3px;
`

const S = {
	Wrapper,
	LineContainer,
	LineContainerEnd,
	ContentBox,
	Text,
	SmallText,
	Title,
	BoldText,
	IconBox,
}
