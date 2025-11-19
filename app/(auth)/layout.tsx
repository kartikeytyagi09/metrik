import Link from "next/link";
import Image from "next/image";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    // const session = await auth.api.getSession({ headers: await headers() })

    // if(session?.user) redirect('/')

    return (
        <main className="min-h-screen flex justify-center items-center ">
            <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-center">
                <Link href="/" className="mb-6">
                   <Image
                    src="/assets/icons/logo.svg"
                    alt="Logo"
                    width={160}
                    height={40}
                    className="w-auto h-10"
                  />
                </Link>
                {/* sign-in/sign-up */}
                <div className="w-full mt-4">{children}</div>
            </div>

            
        </main>
    )
}
export default Layout
