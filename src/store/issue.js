import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IssueAPI } from '../apis/issues'

/**
 * Dispatcher에서 사용되는 value 기본 형태
 */
const initialState = {
	issue: [],
	getIssueState: {
		loading: true,
		done: false,
		err: null,
	},
}

/**
 * Issue 조회
 */
export const getIssue = createAsyncThunk(
	'issue/getIssue',
	async ({ owner, repository, id, params }) => {
		const res = await IssueAPI.getData(owner, repository, id)
		return res.data
	},
)

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		// get issue

		// 🟡 조회 로딩(pending 상태)
		builder.addCase(getIssue.pending, state => {
			state.getIssueState.loading = true
		})

		// 🟢 조회 성공(fulfilled 상태)
		builder.addCase(getIssue.fulfilled, (state, action) => {
			state.issue = action.payload
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = null
		})

		// 🔴 조회 실패(rejected 상태)
		builder.addCase(getIssue.rejected, (state, action) => {
			state.getIssueState.loading = false
			state.getIssueState.done = true
			state.getIssueState.err = action.payload
		})
	},
})
