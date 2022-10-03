import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";
import {useTheme} from "next-themes";

export default function Navbar() {
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
        <nav className="px-10 py-8 flex justify-between bg-white dark:bg-gray-900">
            <Link href="/">
                <a className="text-black text-3xl font-semibold italic dark:text-white">muhammad<span className="text-cyan-500">oka.</span></a>
            </Link>
            <ul className="text-black flex items-center md:gap-8 sm:gap-2 dark:text-white">
            <li>
                {renderThemeChange()}
            </li>
            <li>
                <Link className="px-2 py-1" href="/about"><a className="text-lg">about</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/programming"><a className="text-lg">programming</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/uses"><a className="text-lg">uses</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/socials"><a className="text-lg">socials</a></Link>
            </li>
            </ul>
        </nav>
    );
}