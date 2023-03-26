import { Axios } from './@core'

/**
 * gitHub Open API에게 url로 Issue 배열을 요청하는 모듈
 * @param {String} owner - 소유자명
 * @param {String} repository - repository명
 * @param {Object} params - 기타 params
 */
export const IssuesAPI = {
	getData(owner, repository, params) {
		return Axios.get(`/repos/${owner}/${repository}/issues`, { params })
	},
}

/**
 * gitHub Open API에게 url로 Issue를 요청하는 모듈
 * @param {String} owner - 소유자명
 * @param {String} repository - repository명
 * @param {number} id - id
 */
export const IssueAPI = {
	getData(owner, repository, id, params) {
		return Axios.get(`/repos/${owner}/${repository}/issues/${id}`)
	},
}
