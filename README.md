Sistem de Autentificare MERN

Un sistem de autentificare complet, pregătit pentru producție, construit cu stack-ul MERN (MongoDB, Express, React, Node.js). Acest proiect include funcționalități precum verificarea emailului, resetarea parolei și autentificare securizată bazată pe token-uri folosind JWT și cookies.

🚀 Funcționalități

Autentificare Utilizator: Înregistrare, Autentificare și Deconectare.

Verificare Email: Trimiterea unui cod de verificare pe email-ul utilizatorului la înregistrare.

Gestionare Parolă: Funcționalitate „Ai uitat parola?” și resetare parolă folosind token-uri securizate.

Rute Protejate: Rute frontend accesibile doar utilizatorilor autentificați.

Management de Stare: Utilizează Zustand pentru gestionarea stării globale.

UI/UX: Stilizare cu Tailwind CSS, animații fluide cu Framer Motion și iconițe Lucide.

Securitate:

Criptarea parolelor cu Bcryptjs.

Autentificare JWT securizată prin cookie-uri HTTP-only.

Configurare CORS.

🛠️ Stack Tehnologic
Backend

Node.js & Express: Logică server-side și API REST.

MongoDB & Mongoose: Bază de date și modelare obiecte.

JSON Web Tokens (JWT): Autentificare securizată a utilizatorilor.

Nodemailer: Serviciu de email pentru verificare și resetare parolă.

Bcryptjs: Criptarea parolelor.

Cookie-parser: Gestionarea cookie-urilor din browser.

Frontend

React (Vite): Framework frontend modern.

Tailwind CSS: Stilizare bazată pe utilitare.

Framer Motion: Animații UI avansate.

Zustand: Management de stare lightweight.

React Router Dom: Rutare client-side.

Axios: Comunicare cu API-ul.

Aplicația va fi disponibilă la http://localhost:5173.

📂 Structura Proiectului
AUTH-MERN/
├── backend/                # Codul sursă Backend
│   ├── controllers/        # Controlerele rutelor
│   ├── db/                 # Conectarea la baza de date
│   ├── mail/               # Template-uri email și transporter
│   ├── middleware/         # Middleware de autentificare
│   ├── models/             # Scheme Mongoose
│   ├── routes/             # Endpoint-uri API
│   └── utils/              # Funcții utilitare
├── frontend/               # Codul sursă Frontend
│   ├── src/
│   │   ├── components/     # Componente UI reutilizabile
│   │   ├── pages/          # Componente de tip pagină
│   │   ├── store/          # Store Zustand
│   │   └── utils/          # Utilitare Frontend
└── package.json            # Configurație și dependențe root
