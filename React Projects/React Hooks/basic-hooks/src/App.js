import Count from "./components/useEffect/Count";
import AddItem from "./components/useState/AddItem";
import TextToggle from "./components/useState/TextToggle";

export default function App() {
  return (
    <div>
      {/* <TextToggle maxLength={35}>
        Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step
        towards completing it
      </TextToggle> */}
      {/* <AddItem /> */}
      <Count />
    </div>
  );
}
