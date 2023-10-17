export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body style={{ margin: "0", padding: 0 }}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
