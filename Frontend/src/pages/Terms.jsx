import React from 'react';
import '../assets/css/About.css'
import Topbar from '../components/Topbar1';
import Footer from '../components/Footer';
import terms from '../assets/images/terms_icon.gif'


function TermsAndConditions() {
  return (
    <div>

    <Topbar/>
    <div className="terms-and-conditions">
        <div className='icon'>
        <img src={terms} style={{width:"25%"}}/>        
        </div>
      <h1 style={{ textAlign:"center"}}>Terms and Conditions</h1>


      <p>
        Welcome to FinMate, an expense tracker app designed to help you manage your finances effectively. These Terms and Conditions outline the rules and regulations for using our app. By using FinMate, you accept and agree to be bound by these terms. If you disagree with any part of these terms, please refrain from using our services.
      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>1. User Eligibility</h2>
      <p>
      You must be at least 16 years old to use FinMate. By using the app, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms and Conditions.

At FinMate, we prioritize the safety and privacy of our users. Ensuring that our services are used by individuals who are of legal age is crucial to maintaining a secure and responsible platform for managing finances.
      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>2. Account Registration</h2>
      <p>
      To access certain features of FinMate, you may be required to register for an account. When you do so, you agree to provide accurate, current, and complete information during the registration process and to update this information to keep it accurate, current, and complete.

Account registration is a straightforward process designed to tailor your FinMate experience. By providing accurate and up-to-date information, you enable us to offer you a more personalized and efficient financial management tool.
      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>3. User Responsibilities</h2>
      <p>
      You are responsible for maintaining the confidentiality of your account and password. You also agree to restrict access to your computer or mobile device to prevent unauthorized access to your FinMate account. You accept full responsibility for all activities that occur under your account or password.

Security and privacy are paramount when it comes to your financial data. By taking responsibility for safeguarding your account information, you ensure that your financial information remains confidential and secure.
      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>4. Prohibited Activities</h2>
      <p>
        While using FinMate, you agree not to engage in any activities that:
      </p>
      <ul>
        <li>Violate any local, national, or international laws or regulations.</li>
        <li>Disrupt or interfere with the app's functionality, security, or availability.</li>
        <li>Attempt to gain unauthorized access to other users' accounts or data.</li>
        <li>Use any automated system or software to extract data from FinMate without our prior written consent.</li>
        <li>Impersonate any person or entity or provide false or misleading information.</li>
        <li>Maintaining a respectful and law-abiding community within FinMate is essential. These guidelines are in place to ensure a safe and enjoyable experience for all users.</li>
      </ul>
      <br/>
      <h2 style={{ fontSize: '22px' }}>5. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your account and access to FinMate at our sole discretion, without notice, for any reason, including but not limited to a breach of these Terms and Conditions or any applicable laws or regulations.
      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>6. Privacy</h2>
      <p>
      Your use of FinMate is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information. Please review the Privacy Policy to understand our data practices fully.

Protecting your personal information is a fundamental aspect of our commitment to you. Our Privacy Policy outlines our practices in detail, ensuring transparency and trust.


      </p>
      <br/>
      <h2 style={{ fontSize: '22px' }}>7. Changes to Terms and Conditions</h2>
      <p>
      We may update these Terms and Conditions from time to time to reflect changes in our services or to comply with legal requirements. Any changes will be effective upon posting the revised terms on the app. It is your responsibility to review these Terms and Conditions periodically for updates.

We believe in keeping you informed about any changes that may impact your experience with FinMate. Your continued use of our app signifies your acceptance of these updates, which are designed to enhance your financial management capabilities.
      </p>

     
    </div>
    <br/><br/><br/>
    <Footer/>
    </div>
  );
}

export default TermsAndConditions;