import { createContext, useState } from "react";
import { IUser, IUserContextWrapper, UserContextType } from "./types";

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextWrapper = ({ children }: IUserContextWrapper) => {
  const [user, setUser] = useState<IUser>({
    firstName: undefined,
    lastName: undefined,
  });

  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
