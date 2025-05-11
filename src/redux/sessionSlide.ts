
import { createSlice,createAsyncThunk ,  PayloadAction } from "@reduxjs/toolkit";
import {ISessionState} from "./ISessionState";
import {SessionStatus} from "./SessionStatus";

const initialState: ISessionState = {
     sessionId: null,
     status: SessionStatus.IDLE,
 }

export const fetchSessionId = createAsyncThunk(
    "session/fetchSessionId",
    async () => {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("123456");
            }, 2000);
        });
    }
);


const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSessionId: (state, action: PayloadAction<string>) => {
            state.sessionId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSessionId.pending, (state) => {
                state.status = SessionStatus.LOADING;
            })
            .addCase(fetchSessionId.fulfilled, (state, action) => {
                state.sessionId = action.payload;
                state.status = SessionStatus.SUCCESSFUL;
            })
            .addCase(fetchSessionId.rejected, (state) => {
                state.status = SessionStatus.FAILED;
            });
    },
});


export const { setSessionId } = sessionSlice.actions;
export default sessionSlice.reducer;

