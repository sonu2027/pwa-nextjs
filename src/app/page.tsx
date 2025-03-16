'use client';

import { useState } from 'react';

export default function Home() {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>('default');

  // Request notification permission
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  };

  // Send notification
  const sendNotification = () => {
    if (Notification.permission !== 'granted') {
      alert('Please allow notifications first.');
      return;
    }

    // Display the notification
    new Notification('Hello!', {
      body: 'You received a push notification.',
      icon: '/icons/icon-192x192.png', 
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <button
        onClick={requestNotificationPermission}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors mb-4"
      >
        Enable Notifications
      </button>
      {notificationPermission === 'denied' && (
        <p className="text-red-500 mb-4">
          Notifications are blocked. Please enable them in your browser settings.
        </p>
      )}
      <button
        onClick={sendNotification}
        disabled={notificationPermission !== 'granted'}
        className={`${
          notificationPermission === 'granted'
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-400 cursor-not-allowed'
        } text-white px-6 py-2 rounded-lg shadow-md transition-colors`}
      >
        Send Notification
      </button>
    </div>
  );
}