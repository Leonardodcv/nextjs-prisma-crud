import Link from "next/link"

function Navbar() {
    return (
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center py-3">
                <Link href="/">
                    <h3 className="font-bold text-3xl">NEXTJS CRUD</h3>
                </Link>
                <ul className="flex gap-x-2 text-lg font-bold">
                    <li>
                        <Link href="/new" className="text-slate-300 hover:text-slate-300" >
                            New tasks
                        </Link>
                    </li>
                    <li className="text-slate-300 hover:text-slate-300">
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar