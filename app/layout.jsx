import "./globals.css";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Dr. Sumit Sinha | DM Cardiologist in Ara, Bihar", template: "%s | Dr. Sumit Sinha" },
  description: "Consult Dr. Sumit Sinha, MBBS, MD Medicine (PMCH Patna), DM Cardiology (RNT Medical College, Udaipur). Sunday cardiology OPD at Dr. Rungta Clinic, K.G. Road, Ara.",
  keywords: ["cardiologist in Ara", "DM cardiologist Ara", "heart specialist in Ara", "cardiologist Bhojpur", "cardiology OPD Ara"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr. Sumit Sinha | Cardiologist in Ara",
    description: "Sunday cardiology consultation at Dr. Rungta Clinic, K.G. Road, Ara. MBBS, MD (Medicine), DM (Cardiology).",
    type: "website", locale: "en_IN", url: site.url
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
