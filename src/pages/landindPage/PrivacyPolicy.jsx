import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Header */}
      <header className="border-b border-white/10 px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 shrink-0 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="text-gray-300">Hello!! Welcome to Calai</div>
        </div>

        <div className="flex  sm:flex-row items-center gap-3 sm:gap-6 text-gray-300 w-full md:w-auto justify-end sm:justify-end">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0" />
            <span className="text-xs sm:text-sm">Enquiries@calai.info</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0" />
            <span className="text-xs sm:text-sm">+447719436543</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className=" mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-[#E8D1FF]">
          Privacy Policy
        </h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          At Calai, we are committed to protecting your privacy and handling your personal and business information responsibly. This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights when you use our website and services.
        </p>

        <p className="text-gray-300 leading-relaxed mb-10">
          By accessing or using our website and services, you acknowledge that you have read this Privacy Policy and understand how we collect, use and protect your information.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Customer Responsibility
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          By using Calai, you confirm that you have the necessary authority to upload and manage the business information provided to the platform, including menus, pricing, opening hours, promotional offers, FAQs and any other content used to configure your AI assistant.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          You are responsible for ensuring that the information you provide is accurate, up to date, and that you have the necessary rights or permissions to use it.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Information We Collect
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Depending on how you use Calai, we may collect:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10 ml-4">
          <li>Name, email address and contact details</li>
          <li>Business information, including restaurant name, menus, prices, opening hours, FAQs and AI configuration</li>
          <li>Account and billing information</li>
          <li>AI usage statistics and dashboard analytics</li>
          <li>Call metadata, including call duration and timestamps</li>
          <li>Customer order information processed through the AI assistant</li>
          <li>Technical information such as browser type, IP address, device information and website usage data</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          How We Use Your Information
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We use your information to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10 ml-4">
          <li>Provide and operate the Calai platform</li>
          <li>Configure and personalise your AI assistant</li>
          <li>Process customer calls and food orders</li>
          <li>Generate order summaries and call analytics</li>
          <li>Improve platform performance, reliability and user experience</li>
          <li>Monitor usage and diagnose technical issues</li>
          <li>Communicate important account and service updates</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Call Recordings & Transcripts
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Call recordings and transcripts belong to the business that owns the account.
          Only authorised users within that business can access their own call recordings and transcripts through the Calai dashboard.
          Calai personnel do not routinely access customer recordings or transcripts. Access will only occur:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4 ml-4">
          <li>With the account holder's permission</li>
          <li>Where reasonably necessary to investigate a reported technical issue or provide customer support</li>
          <li>Where required by law</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-4">
          To help protect your privacy:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-10 ml-4">
          <li>Call recordings are automatically deleted after 30 days.</li>
          <li>Call transcripts are automatically deleted after 30 days.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Business Data
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          To configure your AI assistant, we securely store the business information you provide, including menus, prices, opening hours, FAQs and other configuration data.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          If your Calai subscription is cancelled, your uploaded menus, documents and AI configuration will be retained securely for up to 6 months, allowing you to reactivate your account without needing to upload everything again. After this period, the information will be permanently deleted unless we are legally required to retain it.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Data Sharing
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We never sell your personal or business information. We only share information where necessary to provide our services, including with trusted third-party providers that support:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4 ml-4">
          <li>Secure cloud hosting</li>
          <li>AI processing</li>
          <li>Telephony services</li>
          <li>Payment processing</li>
          <li>Technical infrastructure</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-10">
          These providers process information solely on our behalf and are required to protect your information in accordance with applicable data protection laws.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Third-Party Services
        </h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          Calai uses carefully selected third-party service providers to deliver parts of our platform.
          While we carefully choose our providers, their services are governed by their own terms and privacy policies. Where appropriate, we implement safeguards to ensure your information remains protected.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Data Retention
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We retain personal and business information only for as long as necessary to provide our services and comply with applicable legal obligations.
          Our standard retention periods are:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4 ml-4">
          <li>Call recordings – 30 days</li>
          <li>Call transcripts – 30 days</li>
          <li>Platform analytics – 30 days</li>
          <li>Menus, uploaded documents and AI configuration after account cancellation – 6 months</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-10">
          Some information may be retained for longer where required by law or where necessary to establish, exercise or defend legal claims.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Data Security
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We use appropriate technical and organisational security measures to help protect your information against unauthorised access, disclosure, alteration or loss.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          While we take reasonable steps to safeguard your information, no method of transmitting or storing electronic data can be guaranteed to be completely secure.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Account Security
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          If you believe your account has been accessed without your authorisation, please notify us immediately so we can help secure your account.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          International Data Processing
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Some of our trusted service providers may process information outside the United Kingdom.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          Where this occurs, we take appropriate measures to ensure your information is protected in accordance with applicable UK data protection laws.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Your Rights
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Subject to applicable data protection laws, you may have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-3 mb-4 ml-4">
          <li>Access your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Request a copy of your personal data</li>
          <li>Restrict or object to certain types of data processing</li>
          <li>Withdraw your consent where processing is based on your consent</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-10">
          To exercise any of these rights, please contact us using the details below.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Our website may use cookies and similar technologies to improve your browsing experience, analyse website traffic and enhance the performance of our services.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          You can manage or disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Children's Privacy
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Calai is a business service and is not intended for use by individuals under the age of 18.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          We do not knowingly collect personal information directly from children.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes to our services, technology or legal obligations.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          Any updates will be published on this page, and the revised Privacy Policy will take effect from the date it is published.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#E8D1FF]">
          Contact Us
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          If you have any questions about this Privacy Policy or how we handle your information, please contact us:
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          <strong>Calai</strong><br />
          Email: <a href="mailto:hello@calai.info" className="text-[#E8D1FF] hover:underline">hello@calai.info</a><br />
          Website: <a href="https://www.calai.info" target="_blank" rel="noopener noreferrer" className="text-[#E8D1FF] hover:underline">www.calai.info</a>
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

