**Patient Registration App**
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

**🛠️ Technologies**
React

Vite

Tailwind CSS

@electric-sql/pglite

BroadcastChannel

**🚀 Getting Started**
1. Clone the Repo
git clone https://github.com/AthulMckell/medblocks-reg.git
cd medblocks-reg
2. Install Dependencies
npm install
3. Run the Dev Server
npm run dev

**🔧 Project Structure**
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


**👨‍⚕️ Author
Athul Raj M – @AthulMckell**
