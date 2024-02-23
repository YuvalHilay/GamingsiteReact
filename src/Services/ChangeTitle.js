import { useEffect } from "react";



function ChangeTitle(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
}

export default ChangeTitle;
