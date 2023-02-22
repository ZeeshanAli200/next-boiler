// import 'antd/dist/antd.css'
import store from '@/store/store'
import '@/styles/globals.css'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import variables from '@/styles/variables.module.scss'
import { AuthSharedLayout } from '@/layouts'
export default function App({ Component, pageProps }) {
  return (
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
      <Provider store={store}>
        <AuthSharedLayout>
          <Component {...pageProps} />
        </AuthSharedLayout>
      </Provider>
    </ConfigProvider>
  )
}
