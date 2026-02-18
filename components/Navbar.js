"use client";
import Link from "next/link";
// 
function Navbar() {
    // 
  return (
    <nav className="py-5 bg-indigo-600 text-white">
      <div className="mx-auto xl:w-7xl flex items-center justify-between">
        <Link href="/">Logo</Link>
        <ul className="flex gap-x-8">
          <li>
            <Link  href="/about">Home</Link>
          </li>
          <li>
            <Link  href="/about">About</Link>
          </li>
          <li>
            <Link  href="/about">Services</Link>
          </li>
        </ul>
        <button>
            <Link className="" href="/about">Login</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
