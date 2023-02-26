// import 'antd/dist/antd.css'
import store from '@/store/store'
import '@/styles/globals.css'
import { ConfigProvider, Spin } from 'antd'
import { Provider } from 'react-redux'
import variables from '@/styles/variables.module.scss'
import { AuthSharedLayout } from '@/layouts'
import { useEffect, useState } from 'react'
import dataHandler from '@/services/data-handler'
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(() => true)

  useEffect(() => {
    if (store) {
      console.log({ store })
      dataHandler.setStore(store)
      setLoading(false)
    }
  }, [])
  return loading ? (
    <div className="loader-wrapper">
      <Spin />
    </div>
  ) : (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: variables.primaryText,
          colorLink: variables.primaryText,
          colorLinkActive: variables.secondaryText,
          colorLinkHover: variables.secondaryText,
          colorPrimaryHover: variables.secondaryText,
          colorTextPlaceholder: variables.placeholderColor,

          // colorPrimaryHover: variables.secondaryText,
          // colorPrimaryActive: variables.primaryText,
          colorPrimaryBg: variables.bgPrimary,
          // colorBgMask: variables.secondaryText,
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
