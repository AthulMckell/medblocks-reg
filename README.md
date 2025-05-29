Patient Registration App
A frontend-only patient registration system built using:

⚡️ Vite + React

🎨 Tailwind CSS

🧠 PGlite (with IndexedDB backend)

🗂️ BroadcastChannel API for sync

💾 Persistent local database (even after refresh)

📦 Features
Register new patients with name, age, gender, phone, and address

View registered patients

Stored using PGlite with IndexedDB (data stays after refresh)

Real-time sync using BroadcastChannel

Fully frontend — no backend required

Responsive, colorful UI with Tailwind

🛠️ Technologies
React

Vite

Tailwind CSS

@electric-sql/pglite

BroadcastChannel

🚀 Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/AthulMckell/medblocks-reg0.git
cd medblocks-reg0
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Dev Server
bash
Copy
Edit
npm run dev
Visit http://localhost:5173

🔧 Project Structure
bash
Copy
Edit
src/
│
├── components/
│   ├── PatientForm.jsx       # Form to register new patients
│   └── PatientList.jsx       # Display list of patients
│
├── db/
│   └── pglite.js             # IndexedDB + PGlite setup
│
├── App.jsx                   # Main layout
├── main.jsx                  # Entry point
└── index.css                 # Tailwind base styles
📦 Production Build
To deploy (e.g., on Vercel):

Fix for Vercel: No top-level await
Make sure your main.jsx initializes the DB using:

js
Copy
Edit
import { initDb } from './db/pglite';

async function startApp() {
  await initDb();
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

startApp();
Then build:

bash
Copy
Edit
npm run build
📝 Notes
All patient data is stored in the browser using IndexedDB, via PGlite.

This app does not use a server — all logic is on the frontend.

You can deploy it on Vercel, Netlify, or any static hosting service.

👨‍⚕️ Author
Athul Mckell – @AthulMckell
