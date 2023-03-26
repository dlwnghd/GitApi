import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IssuesAPI } from '../apis/issues'

/**
 * Dispatcher에서 사용되는 value 기본 형태
 */
const initialState = {
	issues: [],
	getIssuesState: {
		loading: true,
		done: false,
		err: null,
	},
}

/**
 * Issues 조회
 */
export const getIssues = createAsyncThunk(
	'issues/getIssues',
	async ({ owner, repository, params }) => {
		console.log('dispatch ----> ', owner, repository, params)
		const res = await IssuesAPI.getData(owner, repository, params)
		return res.data
	},
)

export const issuesSlice = createSlice({
	name: 'issues',
	initialState,
	extraReducers: builder => {
		// get issues

		// 🟡 조회 로딩(pending 상태)
		builder.addCase(getIssues.pending, state => {
			state.getIssuesState.loading = true
		})

		// 🟢 조회 성공(fulfilled 상태)
		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload
			state.getIssuesState.loading = false
			state.getIssuesState.done = true
			state.getIssuesState.err = null
		})

		// 🔴 조회 실패(rejected 상태)
		builder.addCase(getIssues.rejected, (state, action) => {
			state.getIssuesState.loading = false
			state.getIssuesState.done = true
			state.getIssuesState.err = action.payload
		})
	},
})
