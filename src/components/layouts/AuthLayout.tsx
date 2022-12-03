import {useRouter} from 'next/router';

import {useAuth} from '../../contexts/Auth';

export default function AuthLayout({children}: {children: React.ReactNode}) {
  const location = useRouter();
  const auth = useAuth();

  if (auth.isAuthenticated) location.replace(auth?.user?.role === 'admin' ? '/' : '/');

  return (
    <div className="relative h-screen min-h-full justify-center md:px-12 lg:px-0">
      {children}
    </div>
  );
}
