'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Home() {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>('default');

  // Request notification permission
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      toast.success("Notification allowed, yo can send notification")
    } else {
      console.log('Notification permission denied.');
      toast.error("Failed to allow notification!")
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
      icon: '/img.jpeg',
    });
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-[#311b7f] to-[#030e1a] text-center">
      <div className='mt-5'>
        <h1 className="text-xl sm:text-4xl font-bold mb-8">Welcome to Our App</h1>
        <div className='w-72 h-72 sm:w-80 sm:h-80 rounded-full border-solid border-12 border-[#332176] flex justify-center items-center animate-pulse'>
          <div className='w-56 h-56 sm:w-64 sm:h-64 rounded-full border-solid border-2  border-[#3b2883] flex justify-center items-center'>
            <div className='w-48 h-48 sm:w-56 sm:h-56 rounded-full border-solid border-2  border-gray-500 flex justify-center items-center'>
              <div
                onClick={requestNotificationPermission}
                className='w-40 h-40 sm:h-44 sm:w-44 rounded-full bg-[#432486] flex justify-center items-center hover:bg-green-500 hover:cursor-pointer transition-all duration-300 hover:scale-110'
              >
                <img src="/Vector.png" alt="" className='hover:rotate-1080 transition-transform duration-3000' />
              </div>
            </div>
          </div>
        </div>
        {notificationPermission === 'denied' && (
          <p className="text-red-500 mb-4">
            Notifications are blocked. Please enable them in your browser settings.
          </p>
        )}
      </div>
      <div className='mb-12 flex flex-col gap-y-4 justify-between items-center'>

        <div><h1 className="text-xl font-bold my-2">Lorem ipsum dolor</h1>
          <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur .</p></div>
        <button
          onClick={sendNotification}
          disabled={notificationPermission !== 'granted'}
          className={`${notificationPermission === 'granted'
            ? 'bg-green-500 border-4 border-solid border-[#30916c] hover:bg-green-600 animate-bounce'
            : 'bg-[#432486] border-4 border-solid border-[#5b34b1] cursor-not-allowed'
            } text-white px-20 py-2 rounded-lg shadow-md transition-colors`}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}