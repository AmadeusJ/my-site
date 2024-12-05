import ProjectLayout from '@/app/projectLayout';

export default function ToyProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectLayout>{children}</ProjectLayout>;
}
