import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  loadingText?: string;
  isLoading: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "site";
  size?: "default" | "sm" | "lg" | "icon" | "site";
  buttonClass?: string;
}
const LoadingButton = ({
  isLoading,
  children,
  type = "submit",
  onClick,
  loadingText = "Loading...",
  variant = "site",
  size = "site",
  buttonClass = "",
}: LoadingButtonProps) => {
  return (
    <Button
      disabled={isLoading}
      type={type}
      className={cn("flex items-center gap-1", buttonClass)}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
