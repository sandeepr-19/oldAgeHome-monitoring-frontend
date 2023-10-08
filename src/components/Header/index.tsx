import { Typography } from "@material-tailwind/react";

export interface UserDetailsItem {
  name: string;
  job: string;
  date: string;
}

interface HeaderProps {
  UserDetails: UserDetailsItem[];
}

const Header = (props: HeaderProps) => {
  const { UserDetails } = props;

  return (
    <>
      <Typography
        variant="small"
        className="text-4xl font-sans font-semibold text-left leading-none pt-8"
      >
        User Details
      </Typography>
      <Typography variant="small" className="font-small text-left py-2 ">
        Total number of users: {UserDetails.length}
      </Typography>
    </>
  );
};

export default Header;
