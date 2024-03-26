import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Wrapper: React.FC<Props> = ({ children }) => (
  <div className=" py-12 w-2/3 mx-auto">{children}</div>
);

export const Title: React.FC<Props> = ({ children }) => (
  <div className="text-2xl font-extrabold py-3">{children}</div>
);
