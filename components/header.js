import useServerDarkMode from '@/hooks/use-server-dark-mode';
import DarkMode from './dark-mode';
import Navigation from './navigation';
import Link from 'next/link';

export default function Header() {
  const theme = useServerDarkMode();
  return (
    <header className='flex md:justify-between justify-center md:items-center mt-4'>
      <div className='flex items-center md:space-x-12'>
        <div className='hidden md:block'>
          <Link href='/' className='text-xl font-mono'>
            Sebastian Belascu{' '}
          </Link>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-2'>
        <Navigation />
        <DarkMode defaultTheme={theme} />
      </div>
    </header>
  );
}
