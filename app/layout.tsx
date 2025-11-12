import { ReactNode } from "react";
import Link from "next/link";

import "../styles/globals.css";





export default function RootLayout({children}: {children: React.ReactNode}) {
     return (
       <html lang="en">
          <body>
               <nav>
                    <Link href="/">Home</Link>
                    <Link href="/counter">Counter</Link>
                    <Link href="/store">Store</Link>
               </nav>
               {children}
          </body>
       </html>
     );
}