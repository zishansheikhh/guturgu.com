import React from 'react';
import PageTemplate from './PageTemplate.jsx';

const sections = [
  {
    title: 'Overview',
    content: 'Welcome to Guturgu. These Terms of Service govern your use of our highly secure, privacy-first messaging application. By using Guturgu, you agree to these terms, which are designed to protect your rights and ensure a safe, private communication environment.'
  },
  {
    title: 'Eligibility',
    content: 'You must be at least the age of 16 to use Guturgu. By creating an account, you confirm that you have the legal capacity to enter into this agreement and that you are not barred from receiving services under applicable laws.'
  },
  {
    title: 'Account Responsibilities',
    content: 'You are responsible for maintaining the security of your device and your account. While Guturgu operates primarily by storing data locally on your device, you have the choice to manually or automatically back up your data to our servers. This backup is fully encrypted, ensuring we cannot read your data. This optional feature prevents data loss if you change devices and allows for seamless cross-platform syncing.'
  },
  {
    title: 'Acceptable Use',
    content: 'Guturgu is built for private communication. You agree not to use our services for illegal activities, spamming, harassment, or distributing malware. Even though your messages, calls, and media are entirely end-to-end (E2E) encrypted and inaccessible to us, you are solely responsible for the content you share.'
  },
  {
    title: 'Service Changes',
    content: 'We are constantly working to improve Guturgu. We may update, modify, or discontinue certain features of the app to enhance performance or security. We will strive to notify you of any significant changes that affect how you use our platform.'
  },
  {
    title: 'Limitations',
    content: 'Guturgu is provided on an "as-is" basis. Because we prioritize your privacy and do not keep unencrypted logs of your data, we cannot recover your messages or media if you lose access to your device and have not opted into the encrypted server backup feature. We are not liable for data loss under these circumstances.'
  },
  {
    title: 'Termination',
    content: 'You may terminate your relationship with Guturgu at any time simply by deleting the app and clearing any encrypted backups you have chosen to store on our servers. We reserve the right to suspend or terminate accounts that are found to be in violation of our Acceptable Use policy.'
  },
  {
    title: 'Contact',
    content: 'If you have any questions about these Terms of Service or need assistance with your account, please contact our legal and support team at legal@guturgu.com.'
  }
];

const TermsOfServicePage = () => {
  return (
    <PageTemplate
      title="Terms of Service"
      eyebrow="Legal"
      metaDescription="GuturGu Terms of Service template."
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

export default TermsOfServicePage;