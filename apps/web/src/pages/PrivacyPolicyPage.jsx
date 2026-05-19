import React from 'react';
import PageTemplate from './PageTemplate.jsx';

const sections = [
  {
    title: 'Overview',
    content: 'Welcome to Guturgu, a messaging app built with your absolute privacy in mind. We believe your conversations belong solely to you. Our promise is simple: we do not collect your personal data, we do not serve targeted ads, and we do not sell your information.'
  },
  {
    title: 'Information We Collect',
    content: 'We collect absolutely no personal data. We do not harvest your contacts, track your location, or store metadata about your usage. The minimal information required to run the Guturgu app remains strictly local to your device.'
  },
  {
    title: 'How We Use Information',
    content: 'Because we do not collect your data, we have nothing to use. You will never be profiled, tracked, or targeted for advertisements. Our sole focus is providing a secure platform for you to communicate.'
  },
  {
    title: 'Data Sharing',
    content: 'We have no data to share. We do not sell, rent, or trade any user information to third-party services, data brokers, or advertisers. Your business is your own.'
  },
  {
    title: 'Data Security',
    content: 'Security is at the core of Guturgu. Everything on our platform is secured by state-of-the-art end-to-end (E2E) encryption. This includes all your text messages, voice calls, video calls, and shared media. Only you and your intended recipient can read or hear them—not even Guturgu has access.'
  },
  {
    title: 'Your Choices',
    content: 'You retain complete control over your app experience. Since your communication history and data live exclusively on your personal device, you can delete your app data at any time without leaving a trace on any external servers.'
  },
  {
    title: 'Contact',
    content: 'If you have any questions or concerns regarding our privacy practices, please feel free to reach out to our team at privacy@guturgu.com.'
  }
];

const PrivacyPolicyPage = () => {
  return (
    <PageTemplate
      title="Privacy Policy"
      eyebrow="Legal"
      metaDescription="GuturGu Privacy Policy template."
    >
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
            <div className="min-h-24 rounded-2xl border border-dashed border-border bg-background/40 p-5 text-sm text-muted-foreground whitespace-pre-wrap">
              {section.content}
            </div>
          </section>
        ))}
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicyPage;