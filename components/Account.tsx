

import {useSelector} from "react-redux";
import { RootState } from "../src/redux/store";
import {SessionStatus} from "../src/redux/SessionStatus.ts";



export function Account () {

    const sessionId = useSelector((state: RootState) => state.session.sessionId);
    const status = useSelector ((state: RootState) => state.session.status);


    return (
        <>
        <p>Accounts page</p>
            {status === SessionStatus.LOADING && <p>Loading...</p>}
            {status === SessionStatus.FAILED && <p>Error.</p>}
            {sessionId && status === SessionStatus.SUCCESSFUL && <p>ID: {sessionId} </p>}
        </>
    )

}