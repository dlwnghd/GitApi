// 데이터 전송 관련
import { createBrowserRouter } from 'react-router-dom'
import Layout from 'components'
import DetailPage from 'pages/Detail'
import ListPage from 'pages/List'
import HomePage from 'pages/Home'
import NotFoundPage from 'pages/404'
import LeftSidebar from 'components/Layout/LeftSidebar/LeftSidebar'
import styled from 'styled-components'

const Body = styled.div`
	float: left;
	width: 100%;
	height: 100%;
	display: flex;
`
/**
 * @param "/" - 기본 경로
 * @param "detail" - detail 경로
 * @param "*" - 그 외 경로(404)
 */
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,

		// 자식 데이터 추가
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/:owner/:repository/:page/:sort/:per_page',
				element: <LeftSidebar />,
				children: [
					{
						path: '',
						element: <ListPage />,
					},
				],
			},
			{
				path: '/:owner/:repository/:id',
				element: <DetailPage />,
			},
		],
	},
	// ⬇️ 404페이지 생성 방법2.
	{
		path: '*',
		element: <NotFoundPage />,
	},
])

export default router
