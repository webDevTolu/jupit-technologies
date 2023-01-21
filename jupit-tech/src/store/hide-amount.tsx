import { ReactNode, createContext, useState } from "react";

interface ContextProps {
  hideAmount: boolean;
  setHideAmount: (hideAmount: boolean) => void;
}

export const HideAmountContext = createContext<ContextProps>({
  hideAmount: false,
  setHideAmount: (hideAmount: boolean) => {},
});

interface HideAmountProviderProps {
  children: ReactNode;
}

export const HideAmountProvider = ({ children }: HideAmountProviderProps) => {
  const [hideAmount, setHideAmount] = useState<boolean>(false);

  return (
    <HideAmountContext.Provider value={{ hideAmount, setHideAmount }}>
      {children}
    </HideAmountContext.Provider>
  );
};
