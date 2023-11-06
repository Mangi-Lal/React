import { useParams } from "react-router-dom";

const Details = () => {
  //useParams() here get the id from browser router component in the App.jsx...
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
