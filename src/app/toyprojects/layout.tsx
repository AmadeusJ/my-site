import React from 'react';
import Header from '@/components/header/Header';

export default function ToyProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}