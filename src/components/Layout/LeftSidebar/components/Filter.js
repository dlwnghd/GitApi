import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { searchActions } from 'store/search'
import styled from 'styled-components'

const Filter = () => {
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
	 * 나열 갯수 변경 코드(비동기)
	 * @param {number} per_page 선택된 갯수
	 */
	const onChangePerPage = e => {
		dispatch(
			searchActions.editSearchText(`https://github.com${owner}/${repository}`),
		)
		// navigate를 쓰니 현재 url에 이어져서 나오는 중
		navigate(`/${owner}/${repository}/1/${sort}/${e.target.value}`)
	}

	return (
		<>
			<Selector value={per_page} name="filter" onChange={onChangePerPage}>
				<option value={10}>10개</option>
				<option value={20}>20개</option>
				<option value={50}>50개</option>
			</Selector>
		</>
	)
}
export default Filter

const Selector = styled.select`
	float: right;
	border: none;
	background-color: lightgreen;
	border-radius: 2rem;
	padding: 0.5rem;
`
