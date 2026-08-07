import * as React from "react";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return React.createElement(
    "div",
    { className: cn("mx-auto w-full max-w-[1440px] px-8", className) },
    children
  );
}