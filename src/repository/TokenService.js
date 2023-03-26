/**
 * 토큰화 모듈
 */

const TokenService = {
	// get (token 가져오기)
	async getAccessToken() {
		// Access Token을 반환하는 비동기 함수를 사용합니다.
		return `${process.env.REACT_APP_ACCESS_TOKEN}`
	},
}

export default TokenService