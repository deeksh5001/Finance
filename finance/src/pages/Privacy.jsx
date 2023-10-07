import React from 'react';
import '../assets/css/About.css';
import Topbar1 from '../components/Topbar1';
import Footer from '../components/Footer';
import pr from '../assets/images/pri_icon.gif'

function Privacy() {
  return (
    <div>
      <Topbar1/>
    
    <div className="privacy-policy">
        <img src={pr} style={{width:"10%"}}/>
      <h1>Privacy Policy</h1>
     
      <p style={{fontSize:"17px"}}>
        Thank you for choosing FinMate! This Privacy Policy outlines how we collect, use, and protect your personal information when you use our expense tracker app. Your privacy is important to us, and we are committed to safeguarding your data.
      </p>
      <br/>

      <h2>1. Information We Collect</h2>

      <h4>1.1 Personal Information</h4>
      <p>
        We may collect personal information, including but not limited to:
      </p>
      <ul>
        <li>Name: This helps us personalize your experience within the app and address you by your preferred name.</li>
        <li>Email address: We use your email to create and authenticate your account, as well as for communication purposes.</li>
        <li>Phone number: Occasionally, we may use your phone number for account recovery or verification purposes.</li>
      </ul>

      <h4>1.2 Financial Information</h4>
      <p>
        FinMate securely stores your financial data, such as:
      </p>
      <ul>
        <li>Transaction details: We save your transaction history to help you track expenses and income.</li>
        <li>Account balances: Your account balances are crucial for providing you with an accurate financial overview.</li>
        <li>Expense and income information: This data allows us to categorize your financial activities effectively.</li>
      </ul>

      <h4>1.3 Usage Data</h4>
      <p>
        We gather usage data to improve our services, including:
      </p>
      <ul>
        <li>App activity: Tracking how you use FinMate helps us identify areas for enhancement and optimization.</li>
        <li>Interactions within the app: We analyze how you interact with the app's features to improve usability.</li>
        <li>Device information: Knowing your device type and operating system helps us ensure compatibility and enhance performance.</li>
      </ul>
      <br/><br/><br/>

      <h2>2. How Information is Collected</h2>
      <p>
        We collect information through:
      </p>
      <ul>
        <li>Registration and account creation: When you sign up for FinMate, you provide us with your personal information.</li>
        <li>Your interactions with FinMate: Your actions within the app, such as adding transactions, contribute to the data we collect.</li>
        <li>Third-party integrations you authorize: If you link external financial accounts, we may collect data from those accounts with your permission.</li>
      </ul>

      <br/><br/><br/>
      <h2>3. Purpose of Data Collection</h2>
      <p>
        We collect and use your data for the following purposes:
      </p>
      <ul>
        <li>To provide the core functionality of FinMate: Your personal and financial information is essential for the app to help you manage your expenses.</li>
        <li>To personalize your experience: We use your data to offer tailored insights and suggestions.</li>
        <li>To enhance and optimize our app: Usage data helps us identify areas for improvement.</li>
        <li>To comply with legal requirements: Some data collection may be necessary to meet regulatory obligations in financial services.</li>
      </ul>

      <br/><br/><br/>
      <h2>4. Data Storage and Security</h2>
      <p>
        We employ industry-standard security measures to protect your data from unauthorized access or disclosure. Your data is securely stored and encrypted, ensuring that only authorized personnel can access it.
      </p>

      <br/><br/><br/>
      <h2>5. Third-Party Services</h2>
      <p>
        We may share data with trusted third-party services for various purposes, such as analytics, payment processing, and app functionality. Please review their privacy policies for more information on how they handle your data.
      </p>

      <br/><br/><br/>
      <h2>6. User Control</h2>
      <p>
        You can access, update, or delete your personal information within the app. For account deletion or other inquiries, please contact us at [contact email]. We are committed to assisting you with your data management preferences.
      </p>

      <br/><br/><br/>
      <h2>7. Cookies and Tracking Technologies</h2>
      <p>
        We may use cookies and tracking technologies for website and app optimization. You can manage cookie preferences through your browser settings, providing you with control over your online experience.
      </p>

      <br/><br/><br/>
      <h2>8. User Consent</h2>
      <p>
        By using FinMate, you consent to the collection and processing of your data as described in this policy. Your consent is crucial for us to provide our services effectively.
      </p>

      <br/><br/><br/>
      <h2>9. Data Retention</h2>
      <p>
        We retain your data only for as long as necessary to fulfill the purposes outlined in this policy. This ensures that your data is not held longer than required.
      </p>

      <br/><br/><br/>
      <h2>10. Data Sharing and Disclosure</h2>
      <p>
        We may share your data when required by law or in the context of business transfers or changes. Rest assured that we only share information when necessary and in compliance with legal requirements.
      </p>

      <br/><br/><br/>
      <h2>11. Data Transfer</h2>
      <p>
        Your data may be transferred internationally. We ensure that data transfers comply with relevant data protection laws to protect your privacy.
      </p>

      <br/><br/><br/>
      <h2>12. Children's Privacy</h2>
      <p>
        FinMate is not intended for use by individuals under the age of 16. We do not knowingly collect data from children. If you are a parent or guardian and believe your child has provided us with information, please contact us, and we will take appropriate steps to address the situation.
      </p>

      <br/><br/><br/>
      <h2>13. Changes to Privacy Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in our data practices. Significant changes will be communicated through the app or our website, ensuring transparency in our policies.
      </p>

      <br/><br/><br/>
      <h2>14. Contact Information</h2>
      <p>
        If you have questions or concerns regarding your privacy, please contact us at [contact email]. Our dedicated support team is here to assist you with any inquiries.
      </p>

      <br/><br/><br/>
      <h2>15. Compliance with Data Protection Laws</h2>
      <p>
        We comply with applicable data protection laws, including [list relevant regulations, e.g., GDPR, CCPA]. Our commitment is to protect your rights and privacy in accordance with these laws.
      </p>

      <br/><br/><br/>
      <h2>16. Acceptance of Terms</h2>
      <p>
        By using FinMate, you agree to the terms of this Privacy Policy. Your continued use of the app signifies your consent to our data collection and processing practices.
      </p>

      <br/><br/><br/>
      <h2>17. Accessibility</h2>
      <p>
        We strive to make our privacy policy accessible to all users. Please contact us if you require accommodations or have specific accessibility needs.
      </p>
      </div>
      <Footer/>
      </div>
  );
}
export default Privacy;