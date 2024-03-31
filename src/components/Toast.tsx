import React from 'react';
import { Toast, ToastContainer } from '@react-native-toast-message';

export const ToastComponent: React.FC = () => {
  return (
    <ToastContainer
      position="bottom"
      renderMessage={({ message }) => (
        <Toast
          text1={message.text}
          visibilityTime={3000} // Adjust the visibility time as needed
        />
      )}
    />
  );
};

