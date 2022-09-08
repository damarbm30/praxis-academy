import { useTheme } from "./ThemeContext";

const FunctionContext = () => {
  const [darkTheme, toggleTheme] = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2em",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FunctionContext</div>
    </>
  );
};

export default FunctionContext;
