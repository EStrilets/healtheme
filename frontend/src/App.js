import UserContext from './context/AccountContext'
import Views from "./components/Views";

function App() {
  return (
    <UserContext>
      <Views />
    </UserContext>
  );
}

export default App;