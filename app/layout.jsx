export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* HTML belgesinin dilini belirtmek için  */}
      <body suppressHydrationWarning={true}>
        <header style={{ border: "solid blue 1px" }}>[header]</header>
        <main>{children}</main>
        <footer style={{ border: "solid blue 1px" }}>[footer]</footer>
      </body>
    </html>
  );
}
