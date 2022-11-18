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
                <BsFillMoonStarsFill onClick={() => setTheme("light")} className="cursor-pointer xxs:text-sm xs:text-md sm:text-xl" />
            )
        } else {
            return (
                <BsFillMoonStarsFill onClick={() => setTheme("dark")} className="cursor-pointer xxs:text-sm md:text-md sm:text-xl" />
            )
        }
    }
    return (
        <nav className="xxs:px-6 sm:px-10 xxs:py-4 sm:py-8 flex justify-between bg-white dark:bg-gray-900">
            <Link href="/">
                <a onClick={() => setNavbar(false)} className="text-black xxs:text-xl xs:text-2xl sm:text-3xl font-semibold italic dark:text-white">muhammad<span className="text-cyan-500">oka.</span></a>
            </Link>
            <ul className="text-black items-center md:gap-8 sm:gap-2 dark:text-white md:flex xxs:hidden">
            <li>
                {renderThemeChange()}
            </li>
            <li>
                <Link className="px-2 py-1" href="/about"><a className="text-lg">about</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/projects"><a className="text-lg">projects</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/uses"><a className="text-lg">uses</a></Link>
            </li>
            <li>
                <Link className="px-2 py-1" href="/socials"><a className="text-lg">socials</a></Link>
            </li>
            </ul>
            <ul className="text-black xxs:text-xl sm:text-2xl gap-4 dark:text-white md:hidden xxs:flex py-1 items-center">
                <li>
                    {renderThemeChange()}
                </li>
                <li className="flex-col">
                    <GiHamburgerMenu onClick={() => setNavbar(!navbar)} />
                    <ul className={`z-50 fixed right-6 text-lg text-right pt-2 ${navbar ? 'block' : 'hidden'}`}>
                        <div className="bg-black/30 p-2 pl-5 rounded">
                            <li className="pb-1">
                                <Link href="/about"><a onClick={() => setNavbar(!navbar)} className="text-lg">about</a></Link>
                            </li>
                            <li className="pb-1">
                                <Link href="/projects"><a onClick={() => setNavbar(!navbar)} className="text-lg">projects</a></Link>
                            </li>
                            <li className="pb-1">
                                <Link href="/uses"><a onClick={() => setNavbar(!navbar)} className="text-lg">uses</a></Link>
                            </li>
                            <li>
                                <Link href="/socials"><a onClick={() => setNavbar(!navbar)} className="text-lg">socials</a></Link>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}