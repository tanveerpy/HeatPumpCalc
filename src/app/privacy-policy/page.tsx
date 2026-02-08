import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | HeatPumpCalc',
    description: 'Privacy Policy for HeatPumpCalc. Learn how we handle your data and our use of cookies for advertising.',
};

export default function PrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate">
            <h1>Privacy Policy</h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Introduction</h2>
            <p>
                At HeatPumpCalc, accessible from our website, one of our main priorities is the privacy of our visitors.
                This Privacy Policy document contains types of information that is collected and recorded by HeatPumpCalc and how we use it.
            </p>

            <h2>2. Log Files</h2>
            <p>
                HeatPumpCalc follows a standard procedure of using log files. These files log visitors when they visit websites.
                The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the number of clicks. This is used for analyzing trends and administering the site.
            </p>

            <h2>3. Cookies and Web Beacons</h2>
            <p>
                Like any other website, HeatPumpCalc uses 'cookies'. These cookies are used to store information including visitors' preferences,
                and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience
                by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2>4. Google DoubleClick DART Cookie</h2>
            <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors
                based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies
                by visiting the Google ad and content network Privacy Policy at the following URL –
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
            </p>

            <h2>5. Advertising Partners Privacy Policies</h2>
            <p>
                You may consult this list to find the Privacy Policy for each of the advertising partners of HeatPumpCalc.
                Our site uses Google AdSense. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons
                that are used in their respective advertisements and links that appear on HeatPumpCalc, which are sent directly to users' browser.
                They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their
                advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>

            <h2>6. GDPR Data Protection Rights</h2>
            <p>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                The right to access, rectification, erasure, restrict processing, object to processing, and data portability.
            </p>

            <h2>7. Contact Information</h2>
            <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
        </main>
    );
}
