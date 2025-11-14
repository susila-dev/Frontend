# Merchant Portal - Java Fullstack with React

## Overview
A comprehensive merchant portal built with Java Spring Boot backend and React frontend. The application enables merchants to manage their products, track orders, and view sales analytics through an intuitive web interface.

## Project Status
**Status:** MVP Complete  
**Last Updated:** November 14, 2025

## Architecture

### Backend (Java Spring Boot)
- **Framework:** Spring Boot 3.2.0
- **Language:** Java 17
- **Database:** H2 (in-memory)
- **Port:** 8080
- **Key Features:**
  - RESTful API architecture
  - JPA/Hibernate for ORM
  - CORS enabled for frontend communication
  - Sample data initialization on startup

### Frontend (React + Vite)
- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router
- **Charts:** Recharts
- **HTTP Client:** Axios
- **Port:** 5000
- **Key Features:**
  - Responsive design
  - Real-time data visualization
  - Single Page Application (SPA)

## Project Structure

```
merchant-portal/
├── src/main/
│   ├── java/com/merchant/portal/
│   │   ├── MerchantPortalApplication.java
│   │   ├── model/
│   │   │   ├── Product.java
│   │   │   ├── Order.java
│   │   │   └── OrderItem.java
│   │   ├── repository/
│   │   │   ├── ProductRepository.java
│   │   │   ├── OrderRepository.java
│   │   │   └── OrderItemRepository.java
│   │   ├── service/
│   │   │   ├── ProductService.java
│   │   │   └── OrderService.java
│   │   ├── controller/
│   │   │   ├── ProductController.java
│   │   │   ├── OrderController.java
│   │   │   └── AnalyticsController.java
│   │   └── config/
│   │       └── DataInitializer.java
│   └── resources/
│       └── application.properties
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Orders.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
└── pom.xml
```

## Features Implemented

### 1. Product Management
- View all products in a card-based grid
- Add new products with name, description, price, quantity, and category
- Edit existing products
- Delete products
- Low stock alerts (products with quantity < 10)
- Search functionality

### 2. Order Management
- View all orders in a table format
- Display order details: order number, customer info, total amount, items
- Update order status (PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED)
- Status-based color coding for visual clarity

### 3. Sales Analytics Dashboard
- Total revenue display
- Total orders count
- Top selling products bar chart
- Order status distribution chart
- Real-time data visualization with Recharts

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/{id}` - Update product
- `DELETE /api/products/{id}` - Delete product
- `GET /api/products/search?query={query}` - Search products
- `GET /api/products/low-stock` - Get low stock products

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/{id}` - Get order by ID
- `POST /api/orders` - Create new order
- `PATCH /api/orders/{id}/status` - Update order status
- `GET /api/orders/status-counts` - Get order counts by status

### Analytics
- `GET /api/analytics` - Get analytics data (revenue, order count, top products)

## Running the Application

The application has two workflows configured:

1. **Backend Workflow**
   - Command: `mvn spring-boot:run`
   - Port: 8080
   - Status: Automatically starts on project load

2. **Frontend Workflow**
   - Command: `cd frontend && npm run dev`
   - Port: 5000
   - Status: Automatically starts on project load

## Sample Data
The application automatically initializes with sample data:
- 10 sample products (Electronics, Accessories, Cables)
- 15 sample orders with various statuses
- Random order items linking products to orders

## Technologies Used

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- H2 Database
- Maven

### Frontend
- React 18
- React Router DOM
- Recharts
- Axios
- Vite

## Recent Changes
- 2025-11-14: Initial MVP implementation with product management, order tracking, and analytics dashboard
- 2025-11-14: Fixed data initialization using @EventListener and @Transactional
- 2025-11-14: Configured CORS for frontend-backend communication
- 2025-11-14: Set up dual workflows for backend and frontend servers

## Next Phase Features (Not Yet Implemented)
1. Customer management system with order history per customer
2. Advanced filtering and reporting for sales data export
3. Bulk product import/export functionality via CSV
4. Role-based access control for multi-user merchant teams
5. Real payment gateway integration
