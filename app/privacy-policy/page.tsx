import Link from "next/link"

export default function PrivacyPolicyPage() {
    return (
        <div className="space-y-8 pb-8 min-h-screen">
            <div className="container mx-auto px-2 py-8">

                {/* Page Header Section */}
                <section className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-gray-900 dark:text-gray-100 font-inter">
                        Privacy Policy
                    </h1>
                </section>

                <section className="mx-auto max-w-800px">
                      <Link href="/">
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Back to Tools
                    </button>
                  </Link>
                    <p>
                        <strong>Last updated:</strong> 1/30/2026
                    </p>

                    <p>
                        Sharp Startup LLC (“we,” “us,” or “our”) operates this website. This Privacy
                        Policy explains how we collect, use, and protect your information when
                        you visit or interact with our website.
                    </p>
                    <br />
                    <strong>Information We Collect</strong>
                    <p>
                        We may collect personal information that you voluntarily provide to us,
                        including but not limited to your name and email address when you
                        subscribe to our newsletter, fill out a form, or contact us.
                    </p>
                    <p>
                        We may also automatically collect certain non-personal information about
                        your device and usage, such as your IP address, browser type, referring
                        pages, pages visited, and dates and times of visits.
                    </p>
                    <br />
                    <strong>Email Communications</strong>
                    <p>
                        If you subscribe to our email list, we may use your email address to send
                        newsletters, updates, promotions, or other relevant content. You may
                        unsubscribe at any time by clicking the unsubscribe link in any email or
                        by contacting us directly.
                    </p>
                    <br />
                    <strong>Cookies and Tracking Technologies</strong>
                    <p>
                        This website uses cookies and similar tracking technologies to enhance
                        user experience and analyze website traffic. Cookies are small data files
                        stored on your device that help websites function properly and understand
                        how visitors interact with content.
                    </p>
                    <p>
                        You can disable cookies through your browser settings, though doing so
                        may affect certain site functionality.
                    </p>
                    <br />
                    <strong>Affiliate Links</strong>
                    <p>
                        This website contains affiliate links. If you click on an affiliate link
                        and make a purchase, Sharp Startup LLC may earn a commission at no
                        additional cost to you.
                    </p>
                    <p>
                        Affiliate partners may use cookies or tracking technologies to track
                        referrals and conversions. We do not control these third-party cookies.
                    </p>
                    <br />
                    <strong>How We Use Your Information</strong>
                    <ul>
                        <li>Operate and maintain the website</li>
                        <li>Improve content and user experience</li>
                        <li>Send email communications</li>
                        <li>Track affiliate performance and analytics</li>
                    </ul>
                    <br />
                    <strong>Third-Party Services</strong>
                    <p>
                        We may use third-party services such as email marketing platforms,
                        analytics tools (e.g., Google Analytics), or affiliate networks. These
                        third parties may collect information in accordance with their own
                        privacy policies.
                    </p>
                    <p>
                        We are not responsible for the privacy practices of third-party websites
                        or services.
                    </p>
                    <br />
                    <strong>Data Protection Rights</strong>
                    <p>
                        Depending on your location, you may have certain rights regarding your
                        personal information, including the right to access, correct, or delete
                        your data. To exercise these rights, please contact us.
                    </p>
                    <br />
                    <strong>Changes to This Privacy Policy</strong>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be
                        posted on this page with an updated effective date.
                    </p>
                    <br />
                    <strong>Contact Information</strong>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: sharpstartupteam@gmail.com
                    </p>
                    <p><br />
                        <strong>Sharp Startup LLC</strong>
                    </p>
                </section>

            </div>

        </div>
    )
}