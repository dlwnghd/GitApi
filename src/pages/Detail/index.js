/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useCallback, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import Loading from 'components/Layout/Loading/Loading'
import { getIssue } from '../../store/issue'
import { FlexAlignCSS, FlexColumnCSS } from '../../styles/common'

const COLORS = ['orange', 'yellow', 'pink', 'aqua', 'coral', 'lightgreen']

function DetailPage() {
	const dispatch = useDispatch() // dispatch를 이용한 response 전달
	const anIssue = useSelector(store => store.issue.issue) // issue 선택
	const getIssueState = useSelector(store => store.issue.getIssueState) // issue 로딩 상태창 관리

	/**
	 * @param {String} owner - 소유자
	 * @param {String} repository - 레포지토리
	 * @param {number} id - Issue 고유번호
	 */
	const { owner, repository, id } = useParams()

	// 데이터를 받아서 보내주기
	const getData = useCallback(async () => {
		dispatch(getIssue({ owner, repository, id }))
	}, [])

	// 상세페이지 조회하기
	useEffect(() => {
		if (getIssueState.loading === true) {
		}
		getData()
	}, [getData])

	return (
		<>
			{getIssueState.loading ? (
				<Loading />
			) : (
				<S.Wrapper>
					<S.Container>
						<S.Number># {anIssue.number}</S.Number>
						<S.Title>{anIssue.title}</S.Title>
						<S.Line>
							<ImgArea>
								<p>{anIssue.user.login}</p>
								<ImgBox>
									<Img src={anIssue.user.avatar_url}></Img>
								</ImgBox>
							</ImgArea>
							<S.Box>
								<ReactMarkdown remarkPlugins={[remarkGfm]}>
									{anIssue.body}
								</ReactMarkdown>
							</S.Box>
							<S.SideBox>
								<S.Text>
									<strong>Assignees</strong>
									<br />{' '}
									{anIssue.assignee ? anIssue.assignee : 'No one assigned'}
								</S.Text>
								<S.Text>
									<strong>Labels</strong>
									<br />
									{anIssue.labels && anIssue.labels.length > 0
										? anIssue.labels.map(label => (
												<S.ItemBox>
													<S.Item
														color={
															COLORS[Math.floor(Math.random() * COLORS.length)]
														}
													>
														{label.name}
													</S.Item>
												</S.ItemBox>
										  ))
										: 'None yet'}
								</S.Text>
								<S.Text>
									<strong>Projects</strong>
									<br />
									{anIssue.projects ? anIssue.projects : 'None yet'}
								</S.Text>
							</S.SideBox>
						</S.Line>
					</S.Container>
				</S.Wrapper>
			)}
		</>
	)
}
export default DetailPage

const Wrapper = styled.div`
	width: 100%;
	${FlexColumnCSS}
	align-items: center;
`
const Container = styled.div`
	width: 70%;
	${FlexColumnCSS}
	padding-top: 40px;
	@media screen and (max-width: 1700px) {
		width: 90%;
	}
`

const Title = styled.div`
	font-weight: bold;
	width: 100%;
	font-size: 28px;
	padding-bottom: 18px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	@media screen and (max-width: 700px) {
		font-size: 20px;
	}
`

const Number = styled.span`
	font-size: 20px;
	margin-bottom: 18px;
`

const Line = styled.div`
	margin: 20px 0;
	${FlexAlignCSS}
	align-items: flex-start;
`

const Box = styled.div`
	width: 80%;
	border: 1px solid var(--color-purple);
	background-color: var(--color-light-purple);
	border-radius: 20px;
	margin-right: 30px;
	padding: 20px;
	@media screen and (max-width: 1700px) {
		width: 100%;
	}
	@media screen and (max-width: 700px) {
		font-size: 14px;
	}
`

const SideBox = styled.div`
	width: 15%;
	${FlexColumnCSS}
	@media screen and (max-width: 1700px) {
		display: none;
	}
`

const Text = styled.div`
	width: 100%;
	font-size: 14px;
	padding-bottom: 10px;
	margin-top: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
`

const ItemBox = styled.div`
	${FlexAlignCSS}
	flex-wrap: wrap;
`
const Item = styled.div`
	background-color: ${({ color }) => color};
	border-radius: 8px;
	padding: 1px 5px;
	margin-top: 3px;
	margin-right: 3px;
`

const ImgArea = styled.div`
	width: 15%;
	display: flex;
	align-items: center;
`

const ImgBox = styled.div`
	width: 25px;
	height: 25px;
	overflow: hidden;
	margin: 0 10px;
`

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const S = {
	Wrapper,
	Container,
	Title,
	Line,
	Number,
	Box,
	SideBox,
	ItemBox,
	Item,
	Text,
}
