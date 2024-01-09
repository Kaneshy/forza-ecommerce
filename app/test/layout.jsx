import CheckOutbar from "@/components/bars/CheckOutbar"


export const metadata = {
    title: 'Dashboard',
    description: 'information Admin',
}

export default function CheckOutLayout({ children }) {
    return (
        <main className="">
            <CheckOutbar />
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