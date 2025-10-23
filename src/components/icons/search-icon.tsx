import { Button } from "@components/ui/button";

type SearchIconProps = {
  className?: string;
  onClick?: () => void;
};

const SearchIcon: React.FC<SearchIconProps> = (props) => {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className={props.className}
      onClick={props.onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Search</title>
        <path
          d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default SearchIcon;
