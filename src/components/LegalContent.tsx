import { company } from "@/data/company";

export function PrivacyPolicyContent() {
  return (
    <>
      <p>
        This Privacy Policy describes how Global Crude USA Inc. ("Global Crude," "we," "us") handles information
        submitted through this website.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Information We Collect</h3>
      <p>
        When you submit an inquiry or request a quote, we collect the information you provide, which may include
        your name, business email address, phone number, company name, inquiry type, and the details of your
        equipment, material, or service request.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">How We Use Information</h3>
      <p>
        We use the information you submit to respond to your inquiry, prepare quotes, and coordinate procurement or
        service requests. We do not sell your information to third parties.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Form Processing</h3>
      <p>
        Website inquiries are transmitted through Web3Forms, a third-party form delivery service, so that your
        message reaches our team by email. Please review Web3Forms' own privacy practices for details on how
        submissions are transmitted.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Contact</h3>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href={company.emailHref} className="text-gold font-semibold hover:underline">
          {company.email}
        </a>{" "}
        or {company.phone.display}.
      </p>
    </>
  );
}

export function TermsOfUseContent() {
  return (
    <>
      <p>
        These Terms of Use govern your use of this website, operated by Global Crude USA Inc. By using this site,
        you agree to these terms.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Website Content</h3>
      <p>
        Content on this website, including equipment categories, service descriptions, and reference specifications,
        is provided for general informational purposes. Technical specifications, capacities, and product
        availability should be confirmed directly with our team for your specific project before you rely on them.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Third-Party Brands</h3>
      <p>
        References to third-party manufacturers or brands on this website are provided for descriptive purposes
        only and do not imply an authorized distributor, dealer, or official partner relationship unless expressly
        stated.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">No Warranty</h3>
      <p>
        This website is provided on an "as is" basis without warranties of any kind regarding completeness or
        current accuracy of its content.
      </p>
      <h3 className="text-navy font-semibold text-base pt-2">Contact</h3>
      <p>
        Questions about these terms can be directed to{" "}
        <a href={company.emailHref} className="text-gold font-semibold hover:underline">
          {company.email}
        </a>{" "}
        or {company.phone.display}.
      </p>
    </>
  );
}
