import Link from "next/Link"
export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/reviews">Reviews</Link>
                </li>
                <li>
                    <Link href="/about" prefetch={false}>About</Link>
                </li>
            </ul>
        </nav>
    )
}