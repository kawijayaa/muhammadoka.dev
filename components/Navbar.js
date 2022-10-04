import {BsFillMoonStarsFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import Link from "next/link";
import {useTheme} from "next-themes";
import {useState} from 'react';

export default function Navbar() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [navbar, setNavbar] = useState(false);
    const renderThemeChange = () => {
        const currentTheme = theme == "system" ? systemTheme : theme;

        if (currentTheme == "dark") {
            return (
                <BsFillMoonStarsFill onClick={() => setTheme("light")} className="cursor-pointer xxs:text-sm xs:text-xl" />
            )
        } else {
            return (
                <BsFillMoonStarsFill onClick={() => setTheme("dark")} className="cursor-pointer xxs:text-sm xs:text-xl" />
            )
        }
    }
    return (
        <nav className="xxs:px-6 xs:px-10 xxs:py-4 xs:py-8 flex justify-between bg-white dark:bg-gray-900">
            <Link href="/">
                <a className="text-black xxs:text-lg xs:text-3xl font-semibold italic dark:text-white">muhammad<span className="text-cyan-500">oka.</span></a>
            </Link>
            <ul className="text-black items-center md:gap-8 sm:gap-2 dark:text-white md:flex xxs:hidden">
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
            <ul className={`text-black xxs:text-lg xs:text-2xl gap-4 dark:text-white md:hidden xxs:flex ${navbar ? 'items-start py-2' : 'items-center'}`}>
                <li>
                    {renderThemeChange()}
                </li>
                <li className="flex-col">
                    <GiHamburgerMenu onClick={() => setNavbar(!navbar)}/>
                    <ul className={`text-lg text-right ${navbar ? 'block' : 'hidden'}`}>
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
                </li>
            </ul>
        </nav>
    );
}