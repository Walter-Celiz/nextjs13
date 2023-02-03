import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { font } from "./font";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with NextJs 13</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
