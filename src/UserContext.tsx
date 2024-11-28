import { createContext, useContext, useState, ReactNode } from "react";
import { UserContextType,UserProviderProps,User } from "models/Types";


// Contextの作成
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProviderコンポーネント
export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// ユーザー情報を取得するカスタムフック
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
