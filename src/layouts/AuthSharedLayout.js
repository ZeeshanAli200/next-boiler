import { Header } from '@/components'
import { Jost } from '@next/font/google'
const jost = Jost({ subsets: ['latin'] })
export const AuthSharedLayout = ({ children }) => {
  return (
    <div class={`${jost.className} wrapper`}>
      <Header />
      <main>{children}</main>
      <footer>I'm a 30px tall footer</footer>
    </div>
  )
}
