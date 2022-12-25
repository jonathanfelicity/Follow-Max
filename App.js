
import { UserContextProvider } from "./src/context/UserContext";
import { Root } from "./src/navigators";

export default function App(){

    return (
      <UserContextProvider>
          <Root/>
      </UserContextProvider>
    )
}