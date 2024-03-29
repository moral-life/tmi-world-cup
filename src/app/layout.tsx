import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
// 배경 그라디언트
// from-green-400 to-blue-600

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='h-full'>
            <body className='h-full bg-gradient-to-b from-[#232526] to-[#232526] sm:flex sm:justify-center'>
                {children}
            </body>
        </html>
    );
}
