#  Green Mart ☘

A modern **plant marketplace** built with **Next.js 14** and **Tailwind CSS**. Browse a wide variety of plants, view detailed product pages with descriptions, care tips, and pricing.  
 
---
## 📸 Screenshots  

| Welcome | Products | Product Details |
|---------|----------|-----------------|
| ![Welcome](https://github.com/user-attachments/assets/2ca989a1-c06e-42f6-b010-cf9e05a3b735) | ![Products](https://github.com/user-attachments/assets/8121986b-68ba-48e1-8af5-2968a7e3f930) | ![Details](https://github.com/user-attachments/assets/db9c5727-98cb-40bd-9d74-810641c58840) |

| Cart | Login | Profile |
|------|-------|---------|
| ![Cart](https://github.com/user-attachments/assets/f9a0f324-b134-4ae8-a4b4-adf7f639c7c3) | ![Login](https://github.com/user-attachments/assets/68467b85-9c81-4d0c-9ef4-33868fef6191) | ![Profile](https://github.com/user-attachments/assets/caf67ecb-0e3e-4fec-b2b4-87ad36b3d54a) |

---
## ✨ Features
- 🛒 Product Grid – Browse plants in a responsive grid layout  
- 🔍 Product Details Page – Click any plant to see full details  
- ⚡ Dynamic Routing with Next.js App Router  
- 🎨 Responsive UI powered by Tailwind CSS  
- ⏳ Loading States with custom spinner  
- 🌐 Mock API using JSON Server for product data 
---
## 🛠 Tech Stack
- Next.js 14 – React Framework with App Router  
- Tailwind CSS – Utility-first CSS framework  
- TypeScript – Strongly typed JavaScript  
- JSON Server – Mock REST API  
---
## 📂 Project Structure
green-mart/  
│── app/  
│   ├── products/  
│   │   ├── [id]/page.tsx   # Product details page  
│   │   ├── loading.tsx     # Loading spinner  
│   │   └── page.tsx        # Products list  
│── public/  
│── db.json                 # Mock API data (plants)  
│── package.json  
│── tailwind.config.js  
│── README.md  
---
## 🚀 Getting Started
### 1️⃣ Clone the repo
git clone https://github.com/mohmdadl/Green-Mart.git  
cd green-mart  

### 2️⃣ Install dependencies
npm install  

### 3️⃣ Run JSON Server (Mock API)
npx json-server db.json --port 5000  
👉 API: http://localhost:5000/plants  

### 4️⃣ Start the Next.js app
npm run dev  
👉 App: http://localhost:3000  


  
---
Developed by **Mohamed Adel Badr**
