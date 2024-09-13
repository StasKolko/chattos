export function App(version: number) {
  const app = document.createElement('h1');
  app.textContent = `Это приложение версии: ${version}`

  return app;
}