import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {clearSayHelloAction, createUserAction, sayHelloAction} from "./actions/actions";
import {useState} from "react";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const [name, setName] = useState("");

    const dispatch = useDispatch()

    const title = useSelector(state => state.titleReducer.title);

    const users = useSelector(state => state.usersReducer.users)

    const sayHello = () => {
        dispatch(sayHelloAction("Ilim"))
    }

    const clearText = () => {
        dispatch(clearSayHelloAction())
    }

    const createUser = () => {
        dispatch(createUserAction(name))
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }


    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

export default App;
