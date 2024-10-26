# Condimentum consectetur

This project focuses on the design of an interface to list articles, using Vue with TypeScript and pure CSS, the application is fully responsive, meaning that it automatically adapts to different screen sizes, 
providing a smooth user experience on both mobile devices and desktop computers.

## Features

- Responsive Design: Automatic adaptation to different screen sizes.
- List of Articles: Presentation of a list of articles with a clean and organized design.
- Friendly Interface: Easy navigation for users.

## Technologies Used

Vue 3 with TypeScript, Only CSS, Vite

## Project Structure
```bash 
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── background-cg.avif
│   │   ├── base.css
│   │   ├── chicks-logo-large.svg
│   │   ├── img
│   │   │   ├── american-express-svgrepo-com.svg
│   │   │   ├── mastercard-svgrepo-com.svg
│   │   │   ├── skrill-svgrepo-com.svg
│   │   │   ├── social
│   │   │   │   ├── discord-v2-svgrepo-com.svg
│   │   │   │   ├── facebook-svgrepo-com.svg
│   │   │   │   ├── instagram-svgrepo-com.svg
│   │   │   │   └── twitter-svgrepo-com.svg
│   │   │   ├── trustpilot-svgrepo-com.svg
│   │   │   ├── visa-classic-svgrepo-com.svg
│   │   │   └── visa-svgrepo-com.svg
│   │   ├── logo.svg
│   │   └── main.css
│   ├── Core
│   │   ├── Models
│   │   │   ├── Jug.ts
│   │   │   ├── Solution.ts
│   │   │   └── Steps.ts
│   │   ├── Router
│   │   │   └── index.ts
│   │   ├── Services
│   │   │   └── WaterJugProblem.ts
│   │   └── Utils
│   │       └── Types.ts
│   ├── main.ts
│   ├── Screens
│   │   ├── Home
│   │   │   ├── HomeHead
│   │   │   │   └── HomeHeadComponent.vue
│   │   │   ├── HomeList
│   │   │   │   └── HomeListComponent.vue
│   │   │   └── HomeScreen.vue
│   │   ├── NotFound
│   │   │   └── NotFoundScreen.vue
│   │   └── WaterJugs
│   │       ├── Components
│   │       │   ├── WaterJugsInputComponent.vue
│   │       │   └── WaterJugsResultComponent.vue
│   │       └── WaterJugsScreen.vue
│   ├── Shared
│   │   ├── Components
│   │   │   ├── Footer
│   │   │   │   └── FooterComponent.vue
│   │   │   ├── NavComponent.vue
│   │   │   ├── Pagination
│   │   │   │   └── PaginationComponent.vue
│   │   │   └── Select
│   │   │       └── SelectComponent.vue
│   │   └── Enums
│   └── stores
│       └── counter.ts
├── src_.rar
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.vitest.json
├── vite.config.ts
└── vitest.config.ts
```

## Installation


```bash
git clone https://github.com/joSueOner/fe-challenge.git 
```

```bash
cd water-jug-problem
```

```bash
npm install
```

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## How It Works

- The application displays a list of items in a card format, which adapts to different screen sizes.

- You can see the items organized in a clear and clean way, with a responsive design that allows a comfortable navigation on mobiles, tablets and computers.



## Contributing

Contributions are welcome! If you find any bugs or want to add new features, create an issue or a pull request in the repository.
