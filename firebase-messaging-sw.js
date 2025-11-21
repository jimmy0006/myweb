// 알림 수신을 위한 서비스 워커 (백그라운드 동작)
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// 1. Firebase 설정 (콘솔에서 복사한 내용으로 채우세요)
const firebaseConfig = {
            apiKey: "AIzaSyCifajDhIDpDwS2inu5cxJQ7XsGIWaAIIA",
            authDomain: "home-planner-3322b.firebaseapp.com",
            projectId: "home-planner-3322b",
            storageBucket: "home-planner-3322b.firebasestorage.app",
            messagingSenderId: "617177235542",
            appId: "1:617177235542:web:8388d7a1a3d20595053bf7"
        };

firebase.initializeApp(firebaseConfig);

// 2. 백그라운드 메시지 처리
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);
  
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/icon.png' // (선택사항) 아이콘 경로
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);

// });
