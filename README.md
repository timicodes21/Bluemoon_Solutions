# Bluemoon Solutions Inventory App

This app is a simple and easy-to-use inventory management system that helps you keep track of your products and supplies. With this app, you can quickly and easily add, edit, and delete items in your inventory. Whether you're running a small shop or a large warehouse, this app is the perfect tool to help you manage your inventory more efficiently.

## Installation

To install and run the project, follow this steps

- Clone the repository to your local machine.
- Navigate to the project directory and run npm install.
- Run npx expo start to start the Expo development server.
- Use the Expo Go app on Playstore to view the app on your mobile device or emulator (Follow the instruction on the terminal).

## Usage

- Once you're signed in, you can start adding products to your inventory by tapping the "Add Product" button.
- Fill in the details for each product, such as the name, description, total stock, and price.
- To edit a product, click on the product on the lost page and edit the product.
- You can also delete the product on the same page.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.

  - `components`: Folder to store any common component that you use through your app (such as a generic button), The atomic design priciple for structuring components is applied here
  - `contexts`: This folder houses the global state management for the app for users and inventories.
  - `hooks`: This folder contains custom hooks and reusable logics used throughout the application, such as filtering users and inventories.
  - `screens`: Folder that contains all the application screens/features.
  - `styles`: Folder that contains all the styles used accross the compinents
  - `types`: Folder that contains type declarations used in the app
  - `utils`: Folder that contains reusable functions such as retieving data and storing data in the async storage

- `App.tsx` : This is the index file and contains all the navigator and Context providers
