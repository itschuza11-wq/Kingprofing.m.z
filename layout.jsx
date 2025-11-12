import './globals.css';

export const metadata = {
  title: 'Kingprofit',
  description: 'Kingprofit — user + admin demo'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
