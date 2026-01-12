import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="conatainer bg-green-900 mx-auto flex justify-between items-center fixed w-full top-0">
            <div>
                <div className="flex items-center space-x-4 text-xl md:text-xl font-extrabold tracking-tight mb-4 leading-tight">
                    <Link href="/fbm" className="text-black-900 hover:text-white">FBM</Link>
                    <Link href="/corridor" className="text-gray-300 hover:text-white">CFB</Link>
                    <Link href="/service" className="text-gray-300 hover:text-white">Service</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;