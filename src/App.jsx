import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from './page/HomePage';
import FoldersPage from './page/FoldersPage';
import NotesPage from "./page/NotesPage";

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0 box-border overflow-x-hidden bg-gray-100">
      <div className="parent w-full flex flex-col items-center mt-8 h-full">
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/folderpage" element={<FoldersPage />}>
          </Route>
          <Route path="/notes" element={<NotesPage />}>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
