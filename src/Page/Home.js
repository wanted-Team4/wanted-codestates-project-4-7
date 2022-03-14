import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { forms } = useSelector((state) => state.surveyReducer);
  const dispatch = useDispatch();
  const [surveyId, setSurveyId] = useState(1);

  console.log(forms.filter((el) => el.formId === surveyId));
  return <></>;
};

export default Home;
