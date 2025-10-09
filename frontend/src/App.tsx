import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import AllProjects from './pages/AllProjects/AllProjects';

function App() {
  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <AllProjects />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
