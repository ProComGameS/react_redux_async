import { useState, ReactNode } from "react";
import { SessionContext } from "./SessionContext";

export function SessionProvider({ children }: { children: ReactNode }) {
    const [sessionId, setSessionID] = useState<string | null>(null);

    return (
        <SessionContext.Provider value={{ sessionId, setSessionID }}>
            {children}
        </SessionContext.Provider>
    );
}
