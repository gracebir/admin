import { GlobalStyled } from '../GlobalStyled'
import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <GlobalStyled/>
        {children}
      </body>
    </html>
  )
}
