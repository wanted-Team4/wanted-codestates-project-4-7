import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const Postcode = ({ setPostOpen, setAddress }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress((prev) => {
      return { ...prev, address: fullAddress };
    });
    setPostOpen(false);
  };

  return (
    <Warraper onClick={() => setPostOpen((prev) => !prev)}>
      <Post>
        <DaumPostcode onComplete={handleComplete} />
      </Post>
    </Warraper>
  );
};

const Warraper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Post = styled.div`
  width: 70%;
  height: 50%;
`;
export default Postcode;
