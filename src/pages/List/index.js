import styled from '@emotion/styled'
import Loading from 'components/Layout/Loading/Loading'
import Pagination from 'components/Layout/Pagination/Pagination'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIssues } from 'store/issues'
import { searchActions } from '../../store/search'
import IssueCard from './components/Box'

const LimitIssue = 200

function ListPage() {
	const dispatch = useDispatch()

	const issues = useSelector(store => store.issues.issues)
	const getIssuesState = useSelector(store => store.issues.getIssuesState)
	/**
	 * @param {String} owner - 소유자
	 * @param {String} repository - 레포지토리
	 * @param {String} page - 현재 페이지
	 * @param {String} sort - 분류
	 * @param {String} per_page - 페이지 당 게시물 수
	 */
	const { owner, repository, page, sort, per_page } = useParams()

	// 검색하기
	useEffect(() => {
		dispatch(
			searchActions.editSearchText(`https://github.com/${owner}/${repository}`),
		)
	}, [])

	// 데이터를 받아서 보내주기
	const getData = useCallback(async () => {
		dispatch(getIssues({ owner, repository, params: { page, sort, per_page } }))
	}, [page, sort, per_page])

	// response 상태에 따른 실행
	useEffect(() => {
		if (getIssuesState.loading === true) {
		}
		getData()
	}, [getData])

	return (
		<>
			<>
				{getIssuesState.loading ? (
					<Loading />
				) : (
					<>
						<S.Wrapper>
							{issues.map(issue => (
								<IssueCard
									key={issue.number}
									owner={owner}
									repository={repository}
									number={issue.number}
									title={issue.title}
									body={
										issue.body
											? issue.body.split('').slice(0, 99).join('') + ' ...'
											: issue.body
									}
									commentLen={issue.comments}
									updatedAt={issue.updated_at}
								/>
							))}
							<Pagination
								total={LimitIssue}
								limit={per_page}
								sortType={sort}
								page={page}
							/>
						</S.Wrapper>
					</>
				)}
			</>
		</>
	)
}
export default ListPage

const Wrapper = styled.div`
	width: 100%;
	margin: 20px 20px;
`

const S = { Wrapper }
