import Link from "next/link";
import Image from "next/image";
import UserDropdown from "./UserDropdown";
import NavItems from "./NavItems";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

const Header = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper h-[70px]">
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="MetriK logo"
                        width={200}
                        height={32}
                        className="ml-2 h-12 w-auto cursor-pointer"
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown user={user} />
            </div>
        </header>
    );
};

export default Header;
