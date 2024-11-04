// projects/[id]/page.tsx
import { useRouter } from "next/router";

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
    }
}

export default function ProjectDetail({ project }: ProjectProps) {
    const router = useRouter();
    return <div>Project {project.title}</div>;
}
