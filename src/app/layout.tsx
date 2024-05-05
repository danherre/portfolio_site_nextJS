import './globals.css';
import Navbar from '../../components/NavBar';
import { Contact } from '../../components/Contact';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
