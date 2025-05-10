import { createContext } from "react";


export const SessionContext = createContext<{ sessionId: string | null; setSessionID: (id: string) => void } | null>(null);
