

type MinusProps = {
  onClick?: () => void;
};

export const Minus = ( { onClick }: MinusProps ) => {
  return (
    <svg onClick={onClick} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.22925 8H12.5626'
        stroke='currentColor'
        strokeWidth='0.75'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
