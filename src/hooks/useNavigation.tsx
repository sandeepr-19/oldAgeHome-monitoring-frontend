import { useState, useCallback, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const useNavigation = (props: string) => {
  const navigate = useNavigate();
  const [route, setRoute] = useState(props);

  const selectAction = useCallback(
    (option: SetStateAction<string>) => {
      if (route === option) return;
      setRoute(option);
      navigate(`/${option}`);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
