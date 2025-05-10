import {SessionStatus} from "./SessionStatus.ts";

export interface ISessionState {
    sessionId: string | null;
    status: SessionStatus;
}

