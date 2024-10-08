export const MenuIcon = ({ active }: { active: boolean }) => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.25 1.25C0.25 0.585938 0.796875 0 1.5 0H16.5C17.1641 0 17.75 0.585938 17.75 1.25C17.75 1.95312 17.1641 2.5 16.5 2.5H1.5C0.796875 2.5 0.25 1.95312 0.25 1.25ZM0.25 7.5C0.25 6.83594 0.796875 6.25 1.5 6.25H16.5C17.1641 6.25 17.75 6.83594 17.75 7.5C17.75 8.20312 17.1641 8.75 16.5 8.75H1.5C0.796875 8.75 0.25 8.20312 0.25 7.5ZM16.5 15H1.5C0.796875 15 0.25 14.4531 0.25 13.75C0.25 13.0859 0.796875 12.5 1.5 12.5H16.5C17.1641 12.5 17.75 13.0859 17.75 13.75C17.75 14.4531 17.1641 15 16.5 15Z"
        fill={active ? "#2678FF" : "#909196"}
      />
    </svg>
  );
};
