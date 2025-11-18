# My Vue Portfolio

This is a static portfolio website built with Vue.js. The project showcases various projects and provides detailed views for each one.

## Project Structure

```
my-vue-portfolio
├── public
│   └── index.html         # Main HTML file for the application
├── src
│   ├── main.js           # Entry point of the Vue application
│   ├── App.vue           # Root component of the application
│   ├── router
│   │   └── index.js      # Vue Router setup for navigation
│   ├── components
│   │   ├── Portfolio.vue  # Component to display the portfolio
│   │   └── ProjectCard.vue# Component for individual project cards
│   ├── views
│   │   ├── Home.vue      # Home page component
│   │   └── ProjectView.vue# Component for detailed project view
│   ├── data
│   │   └── projects.json  # JSON file containing project data
│   └── assets
│       └── styles
│           └── main.css  # Main CSS styles for the application
├── package.json           # npm configuration file
├── vite.config.js         # Vite configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-vue-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Usage

- The home page provides a welcome message and a link to the portfolio.
- The portfolio page displays a list of projects, each represented by a project card.
- Clicking on a project card navigates to a detailed view of the project, showing more information.

## License

This project is licensed under the MIT License.