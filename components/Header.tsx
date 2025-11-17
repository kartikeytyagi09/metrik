import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./UserDropdown";
import NavItems from "./NavItems";

const Header = async () => {
    

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper h-[70px] ">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="MetriK logo" width={200} height={32} className=" ml-2  h-12 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown  />
            </div>
        </header>
    )
}
export default Header