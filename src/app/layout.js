export const metadata = {
  title: "Choco Pap",
  description: "La boutique en ligne du chocolat parfait",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Droid+Serif&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Futur header */}
        {children}
        {/* Futur footer */}
      </body>
    </html>
  );
}
