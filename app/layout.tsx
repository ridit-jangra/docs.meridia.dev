import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Meridia Documentation",
  description: "Your description here",
};

const navbar = <Navbar logo={<b>Meridia</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Meridia.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-repo/meridia"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
