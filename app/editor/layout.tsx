import { ReactNode } from 'react';
import PrivateRootLayout from './eComponents/PrivateRootlayout';
type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <PrivateRootLayout >
      <main>{children}</main>
      </PrivateRootLayout>
    </>
  );
}
