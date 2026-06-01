import { useTheme } from "./context/ThemeContext";

function App() {

  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* Components */}

    </div>
  );
}