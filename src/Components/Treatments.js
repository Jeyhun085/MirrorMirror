import { useParams } from "react-router-dom";

const treatmentsData = {
  1: {
    name: "Palcig vannasi"
  },
  2: {
    name: "Sugaring"
  },
  3: {
    name: "Massaj"
  },
  4: {
    name: "Happy end"
  },
}

function Treatments() {
  let { index } = useParams();
  return (
      <h1>This is Treatments page {treatmentsData[index].name}</h1>
  );
}

export default Treatments;