import "./styles.css";
import Header from "./component/Header/Header";
import UserInput from "./component/Input/Input";
import OutputSection from "./component/Output/OutputSection";
export default function App() {
  return (
    <div className="App">
      <Header />
      <UserInput />
      <OutputSection />
    </div>
  );
}
