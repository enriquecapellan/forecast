import { Card } from "./card";

type ErrorCardProps = {
  message: string;
};

export const ErrorCard = ({ message }: ErrorCardProps) => (
  <Card className="w-full bg-red-600 p-4 text-white content-center gap-4 min-h-[120px] shadow-lg">
    <p className="text-lg font-medium text-center">{message}</p>
  </Card>
);
