import Link from "next/link";

async function NavHeader() {
  return (
    <ul className="relative mx-auto flex items-center w-fit rounded-full bg-[rgba(255,255,255,0)] p-3 my-5 border">
      <Link
        href="/"
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-opacity-80 md:px-5 md:py-3 md:text-base"
      >
        Home
      </Link>
      <Link
        title="Admin only"
        href="/dashboard"
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-opacity-80 md:px-5 md:py-3 md:text-base"
      >
        Dashboard
      </Link>
      <Link
        title="Authorized users only"
        href="/about"
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-opacity-80 md:px-5 md:py-3 md:text-base"
      >
        About
      </Link>

      <Link
        href="/register"
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white hover:text-opacity-80 md:px-5 md:py-3 md:text-base"
      >
        Signup
      </Link>
    </ul>
  );
}

export default NavHeader;
