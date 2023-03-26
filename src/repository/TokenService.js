/**
 * 토큰화 모듈
 */

const TokenService = {
	// get (token 가져오기)
	async getAccessToken() {
		// Access Token을 반환하는 비동기 함수를 사용합니다.
		const token = await getTokenAsync() // 예시 코드, getTokenAsync()는 Access Token을 비동기적으로 반환하는 함수입니다.
		return token
	},
}

export default TokenService
