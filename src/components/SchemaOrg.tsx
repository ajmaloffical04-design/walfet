import React from "react";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Walfet",
    "url": "https://walfet.com",
    "logo": "https://walfet.com/logo.png",
    "description": "Walfet is a small studio of engineers and designers shipping fast, durable software for ambitious teams — from first prototype to product at scale.",
    "email": "hello@walfet.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
