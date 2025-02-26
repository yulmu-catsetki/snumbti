import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="relative">
        {/* Simple circular spinner */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-sm text-gray-600 font-light">잠시만 기다려주세요...</p>
    </div>
  );
};

export default LoadingSpinner;