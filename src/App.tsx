import './App.css';
import AppProvider from './app-provider/AppProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
