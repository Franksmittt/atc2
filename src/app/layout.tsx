// C:\Users\User1\abm2\src\app\layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"; 
import { GTM_ID } from '@/lib/gtm-constants'; 
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next'; // Import Metadata

const inter = Inter({ subsets: ['latin'] });

// --- SEO: Root Metadata ---
export const metadata: Metadata = {
  title: 'Alberton Battery Mart | Mobile Battery Replacement & Fitment Service', 
  description: 'Fast, certified mobile battery replacement service in Alberton, New Redruth, and Meyersdal. We bring the Willard & Exide battery to you. Call for a quote!',
  // --- CRITICAL SEO FIX: Changed from placeholder to real domain ---
  metadataBase: new URL('https://www.albertonbatterymart.co.za'), 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- NOTE: Remember to replace GTM-XXXXXXX with your real ID in src/lib/gtm-constants.ts --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>

      <body className={inter.className}>
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header /> 
          <div className="pt-20">
            {children} 
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}