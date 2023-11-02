import { Outlet } from 'react-router-dom';
import Header from './../layout/header/Header';
import Content from './..//layout/content/Content';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {
  const queryClient = new QueryClient();
  return (
    <div>
      <Header />
      <Content>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </Content>
    </div>
  );
}
