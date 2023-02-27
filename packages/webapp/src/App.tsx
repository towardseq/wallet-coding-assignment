import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { UserCount } from './components/usercount';
import { AddUserButton } from './components/adduser';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <header className='App-header'>
          Welcome to the Equi Coding Assignment!
          <UserCount />
          <AddUserButton />
        </header>
      </QueryClientProvider>
    </div>
  );
}

export default App;
