import { createSlice } from '@reduxjs/toolkit'

/**
 * 기본 값
 */
const initialState = {
	text: '',
}

/**
 * Slice를 이용한 검색 기능 사용
 */
export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		editSearchText: (state, action) => {
			state.text = action.payload
		},
	},
})

export const searchActions = searchSlice.actions
