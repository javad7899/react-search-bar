import "./SearchResult.css";
const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result}`)}
    >
      {result}
    </div>
  );
};

export default SearchResult;
