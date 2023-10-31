import Link from 'next/Link';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* HTML belgesinin dilini belirtmek için  */}
      <body className="px-5 py-2"  suppressHydrationWarning={true}>
        <header>
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
        </header>
        <main>
          {children}
          </main>
        <footer>
       Game <a href="https://rawg.io/" target="_blank">RAWG</a>
        </footer>
        
      </body>
    </html>
  );
}