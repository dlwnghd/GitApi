import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Pagination({ total, limit, sortType, page }) {
	const numPages = Math.ceil(total / limit)

	const startPage = Math.floor((page - 1) / 10) * 10 + 1 // 시작페이지번호
	let endPage = startPage + 10 - 1 // 끝 페이지 번호
	if (endPage >= numPages) endPage = numPages // 끝 페이지 번호 수정용

	const navigate = useNavigate() // url 경로 이동용 내비게이션

	function createArray(start, end) {
		var arr = []
		for (var i = start; i <= end; i++) {
			arr.push(i)
		}
		return arr
	}

	/**
	 * 현재 url경로의 일부분
	 * @ex) /angular/angular-cli
	 */

	const currentLocation = useLocation()
		.pathname.split('/')
		.slice(0, 3)
		.join('/')

	const setPage = number => {
		navigate(`${currentLocation}/${number}/${sortType}/${limit}`)
	}

	return (
		<>
			<Nav>
				<Button onClick={() => setPage(1)} disabled={Number(page) === 1}>
					{`<<`}
				</Button>
				<Button onClick={() => setPage(page - 1)} disabled={Number(page) === 1}>
					&lt;
				</Button>
				{createArray(startPage, endPage)
					.fill()
					.map((_, i) => (
						<Button
							key={i + startPage}
							id={i + 1}
							onClick={() => setPage(i + startPage)}
							aria-current={Number(page) === i + startPage ? 'page' : null}
						>
							{i + startPage}
						</Button>
					))}
				<Button
					onClick={() => setPage(Number(page) + 1)}
					disabled={Number(page) === numPages}
				>
					&gt;
				</Button>
				<Button
					onClick={() => setPage(numPages)}
					disabled={Number(page) === numPages}
				>
					{`>>`}
				</Button>
			</Nav>
		</>
	)
}

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 16px;
`

const Button = styled.button`
	border: none;
	border-radius: 8px;
	padding: 8px;
	margin: 0;
	background: black;
	color: white;
	font-size: 1rem;

	&:hover {
		background: tomato;
		cursor: pointer;
		transform: translateY(-2px);
	}

	&[disabled] {
		background: grey;
		cursor: revert;
		transform: revert;
	}

	&[aria-current] {
		background: deeppink;
		font-weight: bold;
		cursor: revert;
		transform: revert;
	}
`

export default Pagination
