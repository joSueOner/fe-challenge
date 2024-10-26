# Water Jug Problem

This is a section of the application, where the classic TypeScript Water Jug Problem is implemented. The objective of the problem is to measure a specific amount of water using two jugs of different capacities, through a series of possible operations (filling, emptying, and transferring water between jugs).

## Description of the Problem

Given two water jugs with fixed capacities (e.g., a 3-liter jug and a 5-liter jug) and a desired amount of water, the objective is to find a series of steps that will allow you to obtain the exact amount of water in one of the jugs.

## Possible Transactions

 - Fill a pitcher to its maximum capacity.
 - Empty a pitcher completely.
 - Transfer water from one pitcher to another until the first pitcher is empty or the second is full.

## Technologies Used

Vue 3 with TypeScript, Only CSS, Vite

## Live Demo

[https://fe-challenge-six.vercel.app/](https://fe-challenge-six.vercel.app/)


## Project Structure
```bash 
├── src
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
│   ├── App.vue
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

The application will be available at [http://localhost:5173/water-jugs](http://localhost:5173/water-jugs)

## How It Works

- Define the capacities of the jugs and the target amount of water using the interface controls.

- The application will calculate and display the steps necessary to obtain the desired amount of water in one of the jugs.

- You will be able to see the operations in real time (filling, emptying, transferring) and a history of the movements performed.

## Example

If the jugs have a capacity of 3L and 5L, and the target quantity is 4L, the algorithm could follow these steps:

- Fill the 5L jug.
- Transfer water from the 5L jug to the 3L jug (leaving 2L in the 5L jug).
- Empty the 3L jug.
- Transfer the remaining water from the 5L jug to the 3L jug.
- Fill the 5L jug again.
- Transfer water from the 5L jug to the 3L jug (leaving 4L in the 5L jug).



## Contributing

Contributions are welcome! If you find any bugs or want to add new features, create an issue or a pull request in the repository.
