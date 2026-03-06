"use client";

import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CallButton({ 
  phoneNumber = "+201003670502", 
  position = "bottom-right",
  showNotification = true,
  notificationText,
  size = "medium",
  pulseEffect = false
}) {
  const { lang } = useParams();
  const { t } = useTranslation();
  
  // Create the tel URL
  const callUrl = `tel:${phoneNumber}`;
  
  const handleClick = () => {
    if (showNotification) {
      // You can add any analytics or tracking here
      console.log('Call button clicked');
    }
  };

  // Use translated text if not provided
  const translatedNotificationText = notificationText || t('global.callUs');

  // Size classes (mobile only, smaller than WhatsApp)
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-12 h-12',
    large: 'w-12 h-12'
  };

  // Icon sizes (mobile only)
  const iconSizes = {
    small: 'w-5 h-5',
    medium: 'w-5 h-5',
    large: 'w-5 h-5'
  };

  // Position classes (mobile only, positioned above WhatsApp)
  // For English (ltr), position on left; for Arabic (rtl), position on right
  const getPositionClasses = () => {
    const isEnglish = lang === 'en';
    const basePosition = 'bottom-36';
    
    switch(position) {
      case 'bottom-right':
        return isEnglish ? `${basePosition} left-4` : `${basePosition} right-4`;
      case 'bottom-left':
        return isEnglish ? `${basePosition} right-4` : `${basePosition} left-4`;
      case 'top-right':
        return isEnglish ? 'top-4 left-4' : 'top-4 right-4';
      case 'top-left':
        return isEnglish ? 'top-4 right-4' : 'top-4 left-4';
      default:
        return isEnglish ? `${basePosition} left-4` : `${basePosition} right-4`;
    }
  };

  // Notification position classes (mobile only)
  const getNotificationPositionClasses = () => {
    const isEnglish = lang === 'en';
    
    switch(position) {
      case 'bottom-right':
        return isEnglish ? 'left-14 top-1/2 -translate-y-1/2' : 'right-14 top-1/2 -translate-y-1/2';
      case 'bottom-left':
        return isEnglish ? 'right-14 top-1/2 -translate-y-1/2' : 'left-14 top-1/2 -translate-y-1/2';
      case 'top-right':
        return isEnglish ? 'left-16 top-1/2 -translate-y-1/2' : 'right-16 top-1/2 -translate-y-1/2';
      case 'top-left':
        return isEnglish ? 'right-16 top-1/2 -translate-y-1/2' : 'left-16 top-1/2 -translate-y-1/2';
      default:
        return isEnglish ? 'left-14 top-1/2 -translate-y-1/2' : 'right-14 top-1/2 -translate-y-1/2';
    }
  };

  // Arrow position classes
  const getArrowPositionClasses = () => {
    const isEnglish = lang === 'en';
    
    switch(position) {
      case 'bottom-right':
        return isEnglish ? 'left-0 -ml-1.5 border-r-blue-50 border-t-transparent border-b-transparent border-r-8' : 'right-0 -mr-1.5 border-l-blue-50 border-t-transparent border-b-transparent border-l-8';
      case 'bottom-left':
        return isEnglish ? 'right-0 -mr-1.5 border-l-blue-50 border-t-transparent border-b-transparent border-l-8' : 'left-0 -ml-1.5 border-r-blue-50 border-t-transparent border-b-transparent border-r-8';
      case 'top-right':
        return isEnglish ? 'left-0 -ml-1.5 border-r-blue-50 border-t-transparent border-b-transparent border-r-8' : 'right-0 -mr-1.5 border-l-blue-50 border-t-transparent border-b-transparent border-l-8';
      case 'top-left':
        return isEnglish ? 'right-0 -mr-1.5 border-l-blue-50 border-t-transparent border-b-transparent border-l-8' : 'left-0 -ml-1.5 border-r-blue-50 border-t-transparent border-b-transparent border-r-8';
      default:
        return isEnglish ? 'left-0 -ml-1.5 border-r-blue-50 border-t-transparent border-b-transparent border-r-8' : 'right-0 -mr-1.5 border-l-blue-50 border-t-transparent border-b-transparent border-l-8';
    }
  };

  return (
    <div className={`fixed z-50 md:hidden ${getPositionClasses()}`}>
      {/* Notification Bubble */}
      {showNotification && (
        <div className={`absolute ${getNotificationPositionClasses()}`}>
          <div className="relative">
            <div className="bg-white text-gray-800 px-3 py-2 rounded-2xl shadow-lg text-sm font-bold whitespace-nowrap animate-fade-in">
              {translatedNotificationText}
              <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${getArrowPositionClasses()}`}></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Call Button */}
      <a
        href={callUrl}
        className={`
          ${sizeClasses[size]}
          ${pulseEffect ? 'animate-pulse' : ''}
          bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700
          rounded-full shadow-lg
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          transform hover:scale-110 active:scale-95
          group
        `}
        onClick={handleClick}
        aria-label="Call us"
      >
        <svg 
          className={`${iconSizes[size]} text-white`}
          viewBox="0 0 24 24" 
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
        
        {/* Pulse ring effect (optional) */}
        {pulseEffect && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75"></div>
        )}
      </a>
    </div>
  );
}
