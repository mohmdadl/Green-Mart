# 🌱 Green Mart

A modern **plant marketplace** built with **Next.js 14** and **Tailwind CSS**. Browse a wide variety of plants, view detailed product pages with descriptions, care tips, and pricing.  

## ✨ Features
- 🛒 Product Grid – Browse plants in a responsive grid layout  
- 🔍 Product Details Page – Click any plant to see full details  
- ⚡ Dynamic Routing with Next.js App Router  
- 🎨 Responsive UI powered by Tailwind CSS  
- ⏳ Loading States with custom spinner  
- 🌐 Mock API using JSON Server for product data  

## 🛠 Tech Stack
- Next.js 14 – React Framework with App Router  
- Tailwind CSS – Utility-first CSS framework  
- TypeScript – Strongly typed JavaScript  
- JSON Server – Mock REST API  

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

## 📸 Screenshots
🏬 Products Page – (Add screenshot here)  
🌿 Product Details Page – (Add screenshot here)  

## 📌 Future Improvements
- 🛍 Add shopping cart & checkout  
- 🔑 User authentication  
- 📱 Mobile-first enhancements  
- 🌎 Deploy to Vercel  

## 📄 License
This project is licensed under the MIT License.  

👨‍💻 Developed by **Mohamed Adel Badr**
