import { Global, ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { store } from 'store/store'
import router from './routes/Routing'
import globalStyles from './styles/global'
import theme from './styles/theme'

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Global styles={globalStyles} />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	)
}

export default App
