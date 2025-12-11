export default function Head() {
  return (
    <>
      <meta
        name="google-site-verification"
        content="qZRiC6xeSv6im1TxfU7r-6n2Vfj_1xypkBc6MPm5bIM"
      />

      <title>Uwem Umoren | WeMoren Portfolio</title>
      <meta
        name="description"
        content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Check out my projects, portfolio, and tutorials."
      />
      <meta name="author" content="Uwem Umoren (WeMoren)" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favico/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favico/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favico/apple-touch-icon.png"
      />
      <link rel="manifest" href="/favico/site.webmanifest" />

      {/* Open Graph */}
      <meta property="og:title" content="Uwem Umoren | WeMoren Portfolio" />
      <meta
        property="og:description"
        content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Explore my projects and tutorials."
      />
      <meta property="og:image" content="/favico/social-preview.png" />
      <meta property="og:url" content="https://wemoren-portf.vercel.app" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Uwem Umoren | WeMoren Portfolio" />
      <meta
        name="twitter:description"
        content="Hi! I'm Uwem Umoren (WeMoren), a frontend web developer. Explore my projects and tutorials."
      />
      <meta name="twitter:image" content="/favico/social-preview.png" />
    </>
  );
}
