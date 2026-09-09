import "./globals.css";

export const metadata = {
  title: { default: "Кошки", template: "%s | Кошки" },
  description: "Простой учебный проект о породах кошек",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
