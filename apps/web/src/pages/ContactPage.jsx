import React from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import PageTemplate from "./PageTemplate.jsx";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    placeholder: "info@guturgu.com",
  },
  {
    icon: MessageCircle,
    label: "Support",
    placeholder: "support@guturgu.com",
  },
  {
    icon: MapPin,
    label: "Address",
    placeholder: "India",
  },
];

const ContactPage = () => {
  return (
    <PageTemplate
      title="Contact"
      eyebrow="Get in touch"
      metaDescription="GuturGu contact page template."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contactItems.map(({ icon: Icon, label, placeholder }) => (
          <section
            key={label}
            className="rounded-2xl border border-border bg-background/40 p-5"
          >
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-2">{label}</h2>
            <p className="text-sm text-muted-foreground">{placeholder}</p>
          </section>
        ))}
      </div>
    </PageTemplate>
  );
};

export default ContactPage;
