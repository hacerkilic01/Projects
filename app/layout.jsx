import Link from 'next/Link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* HTML belgesinin dilini belirtmek için  */}
      <body suppressHydrationWarning={true}>
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
                <Link href="/about">About</Link>
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