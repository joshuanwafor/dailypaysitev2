import Navbar from '@/components/Navbar/Navbar';
import { cn } from '@/utils/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}
const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <>
      <Navbar className="absolute z-20 left-0 top-0 translate-y-0" />
      <div className={cn('flex flex-col gap-1 font-onest  relative', className)}>{children}</div>
    </>
  );
};

export default MainLayout;
