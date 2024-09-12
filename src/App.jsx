import "./App.css";
import NavBar from "./component/NavBar";
import SearchBar from "./component/SearchBar";
import NotesContainer from "./component/NotesContainer";
import Categories from "./component/Categories";
import Optional from "./component/Optional";
import useStore from "./store/Store";
import FoldersPage from "./page/FoldersPage";

function App() {

  const categoryclicked = useStore((state) => state.categoryclicked);


  return (
    <div className="w-screen h-screen m-0 p-0 box-border overflow-x-hidden">
      <div className="parent w-full flex flex-col items-center mt-8">
        {categoryclicked ? <FoldersPage/> : <><NavBar />
        <div className="w-4/5 flex flex-col items-center">
          <SearchBar />
          <Categories />
          <NotesContainer />
          <Optional />          
        </div></>}
        
      </div>
    </div>
  );
}

export default App;
