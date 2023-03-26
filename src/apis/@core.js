import axios from 'axios'
import TokenService from 'repository/TokenService'
/**
 * Axios를 이용한 API에 response를 보내는 것을 모듈화함
 */
export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: `Bearer ${TokenService.getAccessToken()}`,
})
