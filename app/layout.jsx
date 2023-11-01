import Link from 'next/link';
import './globals.css';
import NavBar from '../components/Nav.Bar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* HTML belgesinin dilini belirtmek için  */}
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">    
<header>
  <NavBar />
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


