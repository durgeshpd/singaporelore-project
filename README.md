SingaporeLore Raffle & Cultural Insights Web App

This is a full-stack React web application showcasing Singapore’s rich culture and history, featuring an integrated raffle ticket system powered by Stripe payments and Netlify Functions for backend logic.

---

🔗 Live Application  
➡️ Visit [SingaporeLore](https://singaporelore-project.vercel.app/)

This will take you directly to the SingaporeLore application.

---

🚀 Features

- 🏙️ **Singapore Cultural Content**
    - Explore stories, photos, videos, poems, and street art about Singapore.
    - Dynamic panels linking to curated external resources.

- 🎟️ **Raffle Ticket System**
    - Buy raffle tickets via Stripe Checkout.
    - Real-time ticket count fetched via serverless Netlify Functions.
    - Join raffles and see updated ticket counts instantly.

- 💳 **Secure Payment Integration**
    - Stripe Checkout sessions created via backend Netlify Functions.
    - Payment success handled via Stripe Webhooks.

- 🖥️ **Interactive UI**
    - Floating raffle widget with expandable UI.
    - Responsive design with TailwindCSS styling.

---

🛠️ Tech Stack

### Frontend:
    - **React (JSX, functional components, hooks)**
    - **TailwindCSS for styling**
    - **React Icons for UI elements**
    - **Axios for API calls**

### Backend:
    - **Netlify Functions (serverless backend)**
    - **Stripe SDK for payment processing**
    - **Serverless webhook endpoint for Stripe events**

---

📁 Project Structure

```css
netlify/
  └── functions/
      ├── create-checkout-session.js
      ├── raffle-entry.js
      ├── raffle-status.js
      └── stripe-webhook.js
src/
  └── components/
      ├── AwardsPanels.jsx
      ├── CareDuelBanner.jsx
      ├── PaymentButton.jsx
      ├── RaffleWidget.jsx
  └── App.jsx
public/
tailwind.config.js
package.json
```

---

📦 Setup Instructions
### 1. Clone the repo
```bash

    ~ git clone https://github.com/your-username/singapore-lore-raffle.git
    ~ cd singapore-lore-raffle
```

### 2. Install dependencies
```bash

    ~ npm install
```
### 3. Configure environment variables
Create a .env file in the root directory with:
```bash

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
URL=http://localhost:8888  # Or your deployed site URL
```
```bash
    ~ npm run dev
```
This will run frontend and functions locally.

---

🧪 Raffle & Payment Flow
    - User clicks the raffle ticket icon to expand the widget.
    - User sees current ticket count (fetched from raffle-status function).
    - User can join the raffle or proceed to payment.
    - Payment initiates Stripe Checkout via create-checkout-session.
    - After payment, Stripe Webhook updates the user ticket count.
    - UI updates with the latest ticket count.

---

🔐 User & Payment Notes

|Aspect	            |Details                       |
|-------------------|------------------------------|
|User ID	        |Hardcoded as user_123 for demo|
|Ticket Counting	|Stored in-memory (demo only)  |
|Payment	        |$1 = 1 ticket conversion      |
|Functions	        |Serverless on Netlify         |
|Security	        |Environment variables for keys|

---

📬 Contact
Feel free to open an issue or submit a pull request if you have ideas or improvements.
