# HealthPOS

HealthPOS is a modern, intuitive, and responsive Point of Sale (POS) interface designed for selling services such as fitness classes, therapy sessions, and workshops. The application provides a seamless user experience, enabling customers to select services, add them to a cart, manage their transactions, and complete a simulated checkout process.

## Features

- **Service Selection**: Browse and select from a list of available services.
- **Cart Management**: Add, remove, and modify services in the cart.
- **Customer Management**: Input customer details (name, email, phone) during checkout.
- **Checkout and Payment Simulation**: Complete transactions with a mocked payment flow.
- **Receipt Generation**: View transaction details upon successful checkout.
- **Analytics Dashboard**: Insights on sales trends and revenue.
- **Responsive UI**: Works seamlessly across web and mobile devices.

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI, Framer Motion
- **Charts & Analytics**: Recharts

## Folder Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂transactions
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂dashboard
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂analytics
 ┃ ┃ ┣ 📜analytics.tsx
 ┃ ┃ ┣ 📜dashboard.tsx
 ┃ ┃ ┗ 📜sales-chart.tsx
 ┃ ┣ 📂transactions
 ┃ ┃ ┗ 📜transaction-history.tsx
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜currency-selector.tsx
 ┃ ┃ ┣ 📜error-boundary.tsx
 ┃ ┃ ┣ 📜form.tsx
 ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┣ 📜label.tsx
 ┃ ┃ ┣ 📜loading-spinner.tsx
 ┃ ┃ ┣ 📜scroll-area.tsx
 ┃ ┃ ┣ 📜select.tsx
 ┃ ┃ ┣ 📜table.tsx
 ┃ ┃ ┗ 📜theme-toggle.tsx
 ┃ ┣ 📜cart.tsx
 ┃ ┣ 📜customer-form.tsx
 ┃ ┣ 📜dashboard.tsx
 ┃ ┣ 📜navigation.tsx
 ┃ ┣ 📜payment-form.tsx
 ┃ ┣ 📜receipt.tsx
 ┃ ┣ 📜service-list.tsx
 ┃ ┣ 📜theme-provider.tsx
 ┃ ┗ 📜theme-toggle.tsx
 ┣ 📂lib
 ┃ ┣ 📂providers
 ┃ ┃ ┗ 📜currency-provider.tsx
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📜cart.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜format-currency.ts
 ┃ ┃ ┗ 📜local-storage.ts
 ┃ ┗ 📜utils.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┗ 📜middleware.ts
```

## Setup & Running the Project

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (latest stable version recommended)
- **npm** or **yarn** (package manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MukulAggarwal21/HealthPOS.git
   cd healthpos
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

### Running the Project

- Start the development server:
  ```sh
  npm run dev  # or yarn dev
  ```
- Open your browser and navigate to:
  ```
  http://localhost:3000
  ```

### Building for Production

To build the project for production, run:

```sh
npm run build  # or yarn build
```

Start the production server:

```sh
npm start  # or yarn start
```

### Linting & Code Quality

Run the following command to check for linting errors:

```sh
npm run lint  # or yarn lint
```

## Assumptions & Limitations

- The payment process is simulated (no real payment integration).
- The project focuses on frontend functionalities without backend processing.

## Contributing

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License.

---

Enjoy using **HealthPOS**! 🚀

