import { Spinner } from "@material-tailwind/react";

export default function Preloader() {
  return (
    <div className="flex justify-center items-center mt-6">
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}
