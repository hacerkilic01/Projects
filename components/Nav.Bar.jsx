import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="text-fuchsia-900 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-pink-900 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-rose-900 hover:underline"
            prefetch={false}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
