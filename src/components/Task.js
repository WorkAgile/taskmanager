import React from "react";
import styled from "@emotion/styled";
export default Task;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 50px;
  padding: 10px;
  margin: 5px auto;
  background: #7f8fa6;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: ${props => props.theme.default.text};
  font-size: 1rem;
  font-weight: 700;
`;

const Remove = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  justify-self: flex-end;
`;

function Task({ id, status, title, detail }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [removeId, setRemoveId] = React.useState("");

  const Detail = styled.div`
    visibility: ${isClicked ? "visible" : "hidden"};
    height: 50px;
    width: 98%;
    padding: 10px;
    background: #7f8fa6;
  `;

  async function handleRemove() {
    await fetch(`http://localhost:1234/tasks/${removeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  React.useEffect(() => {
    handleRemove();
  }, [removeId]);

  return (
    <>
      <Container onClick={() => setIsClicked(!isClicked)}>
        <div>{title}</div>
        <div>{status}</div>
        <Remove
          onClick={() => {
            setRemoveId(id);
            window.location.reload();
          }}
        >
          x
        </Remove>
      </Container>

      <Detail>{detail}</Detail>
    </>
  );
}
