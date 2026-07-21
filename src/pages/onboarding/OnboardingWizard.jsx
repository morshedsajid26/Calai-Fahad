import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeStep from './WelcomeStep';
import BusinessDetailsStep from './BusinessDetailsStep';
import OperatingHoursStep from './OperatingHoursStep';
import PhoneSetupStep from './PhoneSetupStep';
import SpecialOffersStep from './SpecialOffersStep';
import PersonalGreetingStep from './PersonalGreetingStep';
import PrinterSetupStep from './PrinterSetupStep';
import ReviewSubmitStep from './ReviewSubmitStep';
import SuccessStep from './SuccessStep';
import Container from '@/components/Container';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    businessType: '',
    contactName: '',
    emailAddress: '',
    contactNumber: '',
    businessAddress: '',
    isAuthorised: false,
    
    // Step 2
    hours: {
      monday: { start: '09:00', end: '17:00', closed: false },
      tuesday: { start: '09:00', end: '17:00', closed: false },
      wednesday: { start: '09:00', end: '17:00', closed: false },
      thursday: { start: '09:00', end: '17:00', closed: false },
      friday: { start: '09:00', end: '17:00', closed: false },
      saturday: { start: '09:00', end: '17:00', closed: false },
      sunday: { start: '09:00', end: '17:00', closed: true }
    },
    useSameHours: false,

    // Step 3
    businessPhoneNumber: '',
    phoneLineProvider: '',

    // Step 4
    promoteSpecialOffers: 'No',
    specialOffersText: '',
    allowCalaiSuggestOffers: false,

    // Step 5
    greetingType: 'Standard Greeting',
    customGreeting: '',

    // Step 6
    hasWifi: 'No',
    useReceiptPrinter: 'No',

    // Step 7
    confirmAccurate: false,
    agreeContact: false,
    agreePrivacy: false,
    agreeTerms: false
  });

  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);
  
  const submitForm = () => {
    console.log("Submitting form data", formData);
    // In the future this is where the API call happens
    handleNext(); // proceed to success step
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={handleNext} />;
      case 1:
        return <BusinessDetailsStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <OperatingHoursStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <PhoneSetupStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <SpecialOffersStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <PersonalGreetingStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <PrinterSetupStep formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <ReviewSubmitStep formData={formData} updateFormData={updateFormData} onSubmit={submitForm} onBack={handleBack} />;
      case 8:
        return <SuccessStep />;
      default:
        return <WelcomeStep onNext={handleNext} />;
    }
  };

  // Steps 1 to 7 are the progress bar steps (Welcome is 0, Success is 8)
  const isProgressBarVisible = currentStep > 0 && currentStep < 8;
  const progressPercentage = ((currentStep) / 7) * 100;

  return (
    <div className="min-h-screen relative bg-linear-to-t from-[#000003] to-[#060F3F] text-white flex flex-col items-center py-10 px-4 overflow-hidden">
      
      <Container className="max-w-3xl relative z-10 w-full">
        {/* Navigation / Header */}
        <div className="flex items-center justify-end mb-8 min-h-[32px]">
          {currentStep > 0 && currentStep < 8 && (
            <button onClick={handleBack} className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
              <FaArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}
        </div>

        {/* Progress Bar */}
        {isProgressBarVisible && (
          <div className="w-full bg-white/10 h-2 rounded-full mb-10 overflow-hidden">
            <motion.div 
              className="bg-gradient-to-r from-[#9810FA] to-[#00D3F3] h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Step Content Wrapper with Animation */}
        <div className="relative p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default OnboardingWizard;
