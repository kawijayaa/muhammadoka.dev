import '../styles/globals.css'
import {ThemeProvider} from "next-themes"
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {useTheme} from "next-themes"
import Navbar from "../components/Navbar";
import {Analytics} from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  const {systemTheme, theme, setTheme} = useTheme()
  const renderThemeChange = () => {
    const currentTheme = theme == "system" ? systemTheme : theme;

    if (currentTheme == "dark") {
        return (
            <BsFillMoonStarsFill onClick={() => setTheme("light")} className="cursor-pointer text-xl" />
        )
    } else {
        return (
            <BsFillMoonStarsFill onClick={() => setTheme("dark")} className="cursor-pointer text-xl" />
        )
    }
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
