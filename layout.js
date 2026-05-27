import './globals.css';

export const metadata = {
  title: 'Marwan & Rawan Wedding',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
