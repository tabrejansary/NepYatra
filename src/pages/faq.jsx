import React, { useState } from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #f56551, #f58c51);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  text-align: left;
  border: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  transition: all 0.2s ease;
  
  &:hover {
    color: #f56551;
  }
`;

const Answer = styled.div`
  padding: 0 1.5rem;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${props => props.isOpen ? '1px solid #eee' : 'none'};
  
  p {
    padding: 1.5rem 0;
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.isOpen ? '0deg' : '90deg'});
  color: #f56551;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f56551, #f58c51);
  border-radius: 12px;
  color: white;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    opacity: 0.9;
  }
  
  button {
    padding: 0.8rem 2rem;
    background: white;
    color: #f56551;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does NepYatra create personalized itineraries?",
      answer: "NepYatra uses advanced AI algorithms to analyze your preferences, budget, and travel style. Our system considers thousands of data points including popular attractions, hidden gems, weather patterns, and local events to craft the perfect itinerary just for you."
    },
    {
      question: "Is NepYatra completely free to use?",
      answer: "Yes! Our basic itinerary planning service is completely free. We may offer premium features in the future, but the core functionality will always remain free for our users."
    },
    {
      question: "How accurate are the travel recommendations?",
      answer: "Our recommendations are powered by a combination of AI analysis and local expertise. We continuously update our database and incorporate user feedback to ensure our suggestions are accurate and relevant."
    },
    {
      question: "Can I modify the generated itinerary?",
      answer: "Absolutely! The AI-generated itinerary is just a starting point. You can easily add, remove, or rearrange activities to perfectly match your preferences."
    },
    {
      question: "How does NepYatra find hidden gems?",
      answer: "Our system analyzes local blogs, social media, and reviews from experienced travelers to identify unique spots that aren't typically crowded with tourists. We also partner with local experts who share their insider knowledge."
    },
    {
      question: "What destinations does NepYatra support?",
      answer: "Currently, we support major travel destinations worldwide with a special focus on Nepal. We're constantly adding new locations based on user demand and travel trends."
    },
    {
      question: "How do I share my itinerary with travel companions?",
      answer: "You can easily share your itinerary via email, messaging apps, or social media. We also offer a PDF download option that includes maps and contact information for all your planned activities."
    },
    {
      question: "Does NepYatra book hotels or activities for me?",
      answer: "While we don't directly handle bookings, we provide direct links to trusted booking platforms for all recommended hotels, restaurants, and activities to make your planning process seamless."
    }
  ];

  return (
    <FAQContainer id="faq">
      <FAQHeader>
        <Title>Frequently Asked Questions</Title>
        <Subtitle>Find answers to common questions about our AI-powered travel planning service</Subtitle>
      </FAQHeader>
      
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              <IconWrapper isOpen={activeIndex === index}>
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </IconWrapper>
            </Question>
            <Answer isOpen={activeIndex === index}>
              <p>{faq.answer}</p>
            </Answer>
          </FAQItem>
        ))}
      </FAQList>
      
      <CTA>
        <h3>Ready to Explore the World?</h3>
        <p>Let NepYatra's AI create your perfect travel itinerary in minutes</p>
        <button onClick={() => window.location.href = '/create-trip'}>
    Start Planning Now
  </button>
      </CTA>
    </FAQContainer>
  );
};

export default FAQ;