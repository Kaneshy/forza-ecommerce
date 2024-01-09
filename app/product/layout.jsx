import LeftSidebar from "@/components/bars/LeftSidebar"
import Navbar from "@/components/bars/Navbar"
import TopSectionbar from "@/components/bars/TopSectionbar"


export const metadata = {
    title: 'Dashboard',
    description: 'information Admin',
}

export default function DashboardLayout({ children }) {
    return (
        <main className="">
            <div className='bg-neutral-950'>
                <Navbar />
            </div>
            <div className="">
                <TopSectionbar/>
                <div className="w-full flex p-4">
                    <LeftSidebar value={true} />
                    <div className="w-full">
                        {children}

                    </div>
                </div>

            </div>

        </main>

    )
}