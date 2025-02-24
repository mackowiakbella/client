import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Clínica Médica",
  description: "Clinica",
  charset: 'UTF-8',
  author: 'Isabella Mackowiak',
  keywords: 'Clinica'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}