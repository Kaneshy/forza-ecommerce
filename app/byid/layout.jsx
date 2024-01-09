import LeftSidebar from "@/components/bars/LeftSidebar"
import Navbar from "@/components/bars/Navbar"
import TopSectionbar from "@/components/bars/TopSectionbar"


export const metadata = {
    title: 'Dashboard',
    description: 'information Admin',
}

export default function ByidLayout({ children }) {
    return (
        <main className="">
            <div className=' bg-black'>
                <Navbar value={'text-white'} />
            </div>
            <div className="">
                <div className="w-full flex p-4">
                    <div className="w-full">
                        {children}

                    </div>
                </div>

            </div>

        </main>

    )
}