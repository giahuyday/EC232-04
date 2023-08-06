import "./SearchResultList.scss";
import SearchCard from "./SearchCard";

const SearchResultsList = ({ results }) => {
    if (!results || !Array.isArray(results)) {
        return null;
      }
    
      return (
        <div className="results-list">
          {results.map(({ Name, ItemID }) => (
            <SearchCard result={[Name, ItemID]} key={ItemID} />
          ))}
        </div>
      );
};

export default SearchResultsList

// class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:text-white dark:hover:bg-neutral-600"
