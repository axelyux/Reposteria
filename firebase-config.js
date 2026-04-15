// ============================================
// FIREBASE CONFIGURATION
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyA176s-DeVdAFOv3WWJDlT_S0G19uOdD1g",
    authDomain: "mi-reposteria-8e215.firebaseapp.com",
    projectId: "mi-reposteria-8e215",
    storageBucket: "mi-reposteria-8e215.firebasestorage.app",
    messagingSenderId: "1056080472627",
    appId: "1:1056080472627:web:f081bb6a3a5a389aa21146"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia al documento único que contiene todos los datos de la app
const dataRef = db.collection('app').doc('data');
