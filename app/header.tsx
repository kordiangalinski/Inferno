import SearchBar from "./searchbar";

export default function Header(): JSX.Element {
    return (
      <header className="w-full bg-slate-900 h-14 flex items-center justify-center fixed top-0 z-50">
        <SearchBar />
      </header>
    );
  }