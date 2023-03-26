import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { searchActions } from 'store/search'
import Filter from './components/Filter'

function LeftSidebar() {
	const dispatch = useDispatch() // dispatch를 이용한 response 전달
	const navigate = useNavigate() // url 경로 이동용 내비게이션

	/**
	 * @param {String} owner - 소유자
	 * @param {String} repository - 레포지토리
	 * @param {String} page - 현재 페이지
	 * @param {String} sort - 분류
	 * @param {String} per_page - 페이지 당 게시물 수
	 */
	const { owner, repository, page, sort, per_page } = useParams()

	/**
	 * 나열 타입 변경 코드(비동기)
	 * @param {String} sortType 선택된 나열 타입
	 */
	const changeSort = sortType => {
		dispatch(
			searchActions.editSearchText(`https://github.com${owner}/${repository}`),
		)
		navigate(`/${owner}/${repository}/1/${sortType}/${per_page}`)
	}

	return (
		<FULL>
			<Title>
				<h1>Issue List</h1>
				<SortArea>
					<button onClick={() => changeSort('created')}>생성순</button>
					<button onClick={() => changeSort('updated')}>업데이트순</button>
					<button onClick={() => changeSort('comments')}>댓글순</button>
				</SortArea>
				<Filter />
			</Title>
			<Outlet />
		</FULL>
	)
}
export default LeftSidebar

const FULL = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const Title = styled.div`
	width: 40%;
	text-align: center;
`

const SortArea = styled.div`
	display: flex;
	justify-content: space-evenly;
`

const S = {
	LeftSidebar,
}
