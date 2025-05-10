import {useNavigate} from "react-router";
// import {setSessionId} from "../src/redux/sessionSlide.ts";
import {useDispatch} from "react-redux";
import { fetchSessionId } from "../src/redux/sessionSlide";
import type { AppDispatch } from "../src/redux/store";


export default function Auth() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();


    const handleAuthentication = async () => {


        await dispatch(fetchSessionId());
        navigate("/account");
}

return (
    <>
    <h1>Welcome to the Authentication page!</h1>
        <button onClick={handleAuthentication}>Click me for ID</button>
    </>
)

}