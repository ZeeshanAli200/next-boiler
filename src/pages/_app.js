// import 'antd/dist/antd.css'
import store from '@/store/store'
import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import variables from '@/styles/variables.module.scss'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: variables.primaryText,
            colorPrimaryBgHover: variables.secondaryText,
            colorPrimaryHover: variables.secondaryText,
            colorPrimaryActive: variables.primaryText,
            colorPrimaryBg: variables.bgPrimary,
          },
        }}
      >
        <div class="wrapper">
          <header>I'm a 30px tall header</header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer>I'm a 30px tall footer</footer>
        </div>
      </ConfigProvider>
    </Provider>
  )
}
