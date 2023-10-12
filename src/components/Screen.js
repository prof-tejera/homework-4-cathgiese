const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 70,
        textAlign: "right",
        marginBottom: 10,
        background: "white",
        fontSize: "20px",
        paddingTop: "40px",
        paddingRight: "15px",
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
