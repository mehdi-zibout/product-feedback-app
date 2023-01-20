import type { ReactNode } from "react";

function Card({ children, className }: CardProps) {
  return (
    <div className={`rounded-[10px] bg-white ${className || ""}`}>
      {children}
    </div>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default Card;
