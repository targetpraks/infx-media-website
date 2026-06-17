import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | INFX Solutions',
  robots: { index: false, follow: false },
};

export default function LegalPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-28 pb-24">
      <h1 className="text-3xl font-bold mb-8">Legal, Privacy & POPIA</h1>

      <div className="space-y-12 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">POPIA Compliance Statement</h2>
          <p className="mb-4">INFX Solutions (a division of Infinity Brands (Pty) Ltd) is fully compliant with the Protection of Personal Information Act 4 of 2013 (POPIA). All data capture on this site is done with explicit user consent.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Data is stored and processed within South Africa.</li>
            <li>Users have the right to request access, correction, and deletion of their data.</li>
            <li>Data is retained for no longer than required for legitimate business purposes.</li>
            <li>All Third-Party Data Processors are contractually bound by POPIA.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Cookie Policy</h2>
          <p className="mb-4">This site uses essential cookies for session management and consent tracking. We do not use third-party ad tracking cookies. Analytics data is anonymised and processed in compliance with POPIA.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">TakeOver Terms</h2>
          <p className="mb-4">Submitting “Book a TakeOver Briefing” does not constitute a binding reservation. A confirmed TakeOver requires a signed contract, deposit, and category exclusivity confirmation.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Category Exclusivity</h2>
          <p>When a brand books a TakeOver slot, their category is locked for the calendar year. One brand per category per year. The 6-slot structure is non-negotiable.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-3">Contact</h2>
          <p>INFX Solutions, Infinity Brands (Pty) Ltd</p>
          <p>Email: leads@infxmedia.xyz</p>
          <p>Address: Bedfordview, Johannesburg, South Africa</p>
        </section>
      </div>
    </section>
  );
}
