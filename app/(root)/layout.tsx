
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metadata = {
    title: 'social-media',
    description: 'A next.js 13 Meta Threads Application Clone, inspired by Javascript Mastery on Youtube'
}
const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ 
    children, 
}: { 
    children: React.ReactNode 
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}