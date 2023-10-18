export const metadata = {
  title: "Denzel & Marliana",
  description:
    "We are excited to welcome you, our loved ones, to attend our special day and where our hearts first met, Cape Town, South Africa. From across the globe or down the road, we hope you can make the journey and help us in celebrating our new adventure as The Washington’s.",
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
