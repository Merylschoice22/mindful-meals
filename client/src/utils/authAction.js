import { useHistory } from "react-router";

export default () => {
  const accessToken = localStorage.getItem("accessToken");
  let history = useHistory();
  if (!accessToken) {
    history.push("/unauth");
  }
};
