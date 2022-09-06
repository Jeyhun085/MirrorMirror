import { useParams } from "react-router-dom";
import treatmentsData from "../TreatmentsData";

function Treatments() {
  let { index } = useParams();
  return (
    <div>
      <h1>This is Treatments page {treatmentsData[index].name}</h1>
      <p>This is text {treatmentsData[index].text}</p>
      <img src={`/images/${treatmentsData[index].img}`}></img>
      <p>This is price: {treatmentsData[index].price} RUB</p>
    </div>
  );
}

export default Treatments;
