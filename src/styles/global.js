import { css } from '@emotion/react'

const globalStyles = css`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	button {
		border: none;
	}

	input {
		border: none;
		:focus-visible {
			outline: none;
		}
	}

	:root {
		--color-dark-white: #f9f7f7;
		--color-pink: #f2d7d9;
		--color-light-purple: #eae8f1;
		--color-purple: #d3cedf;
		--color-light-blue: #cfe3f7;
		--color-blue: #9cb4cc;
		--color-dark-blue: #748da6;
	}
`

export default globalStyles
