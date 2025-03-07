import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";  // Corrected import

const firebaseConfig = {
  apiKey: "AIzaSyDEkg-J1MQYQQnQvma7gq9jYks61YVxQMU",
  authDomain: "data-base-170ab.firebaseapp.com",
  projectId: "data-base-170ab",
  storageBucket: "data-base-170ab.firebasestorage.app",
  messagingSenderId: "386419579421",
  appId: "1:386419579421:web:27d777c7b70cc84a3144f4",
  measurementId: "G-7GB2WHSN3Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const feedbackform = document.getElementById("feedbackForm");
feedbackform.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value;

  push(ref(database, 'Feedback'), { name, email, rating, message })
    .then(() => {
      alert("Thank you for your feedback ☺☺!!");
      feedbackform.reset();
    })
    .catch((error) => {
      alert("Error submitting feedback: " + error.message);
    });
});
