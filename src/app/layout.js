import './globals.css';

export const metadata = {
    title: 'My Portfolio',
    description: 'Modern Portfolio Website'
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}