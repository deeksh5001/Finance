import React, { useState } from 'react';
import '../assets/css/FAQ.css'; // Import your CSS or Stylus stylesheet
import img from '../assets/images/arrow2.gif'
import Topbar1 from '../components/Topbar1';
import img1 from '../assets/images/question.gif';
import Footer from '../components/Footer';
const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else { 
      setExpandedIndex(index);
    }
  };

  return (
    <div>
        <Topbar1/>
        <br/>
    <section className="py-60">
      <div className="container text-control-1">
        <div className='icon' style={{marginLeft:"47.5%"}}>
        <img src={img1} style={{width:"10%"}}/>
        </div>
        <h2 style={{textAlign:"center"}}>Frequently Asked Questions</h2>
        <div className="faqs-section">
          {faqData.map((faq, index) => (
            <div
              className={`faq accordion ${
                index === expandedIndex ? 'expanded' : ''
              }`}
              key={index}
            >
              <div className="question-wrapper" onClick={() => handleToggle(index)}>
                <div className="d-flex align-items-center">
                  <span className="q-mark d-block">Q.</span>
                  <p className="question" title="">
                    {faq.question}
                  </p>
                </div>
                <i
                  className={`material-icons drop ${
                    index === expandedIndex ? 'icon-expend' : ''
                  }`}
                >
                  <img src={img} style={{width:"7%",position:"relative",left:"35%"}}/>
                </i>
              </div>
              <div
                className="answer-wrapper"
                style={{ display: index === expandedIndex ? 'block' : 'none' }}
              >
                <p className="answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default FAQSection;

const faqData = [
  {
    question: 'Is my financial data safe and secure in the app?',
    answer:
      'Yes, we take your security seriously. Our app uses state-of-the-art encryption and security measures to protect your financial data. We do not share your data with third parties without your consent.',
  },
  {
    question: 'What steps should I take if I lose my device or suspect unauthorized access to my account?',
    answer:
      'In case of loss or suspected unauthorized access, change your login credentials immediately. Most importantly, contact our support team to secure your account and investigate any potential security breaches.',
  },
  {
    question: 'How do I contact customer support if I have questions or encounter issues?',
    answer:
      'You can reach our customer support team through the app contact us page  via email or phone. We are here to assist you with any questions or concerns.',
  },
  {
    question: 'What platforms and devices is the app available on?',
    answer:
      'Our app is available on multiple platforms, including iOS, Android, and web browsers. You can access your financial data from your smartphone, tablet, or computer.',
  },
  {
    question: 'Can I generate financial reports with the app?',
    answer:
      'Absolutely! Our finance manager app allow you to generate reports and charts to visualize your financial progress, such as income vs. expenses, net worth, and investment performance.',
  },
  {
    question: 'How can I track my expenses and income within the app?',
    answer:
      ' It is very simple! Log your expenses and income transactions manually or link your accounts for automatic tracking. You can categorize transactions, add notes, and view detailed spending reports.',
  },
  {
    question: 'How do I categorize my expenses?',
    answer:
      ' Answer: You can categorize expenses by assigning them to predefined categories or creating custom ones. This helps you gain a clear understanding of where your money is going.',
  },
];
