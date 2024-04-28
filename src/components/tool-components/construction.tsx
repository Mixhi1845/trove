import { LuConstruction } from "react-icons/lu";

const AvailableSoon: React.FC = () => {
  return (
    <div className="flex border-4 border-dashed border-muted-foreground rounded-lg items-center justify-center h-[50vh]">
      <div className="flex items-center text-3xl font-medium">
        <LuConstruction />
        <p className="ml-4">Tool available soon</p>
      </div>
    </div>
  );
};

export default AvailableSoon;
