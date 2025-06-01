import Card from "@/components/Card";
import Button from "@/components/Button"; // Make sure the path is correct

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      
      <Card />

      {/* Buttons Section */}
      <div className="space-y-4">
        <div className="flex gap-4 flex-wrap items-center">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
