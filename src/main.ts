import "./style.css";

const message: string = "Hello TypeScript!";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `<h1>${message}</h1>`;
}