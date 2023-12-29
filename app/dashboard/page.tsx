import DropZone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";
export default function Dashboard() {
  const { userId } = auth();
  return (
    <div>
      <h1>Dashboard</h1>
      <DropZone />
    </div>
  );
}
