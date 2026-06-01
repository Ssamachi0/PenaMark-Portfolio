import "./globals.css";

import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
    title: "My Portfolio",
    description: "Modern Portfolio Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
