import { CSSProperties, FC } from "react";

export const headerHeight = "60px";

const HeaderStyle: CSSProperties = {
  height: headerHeight,
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

type Props = {
  title: string;
};
const Header: FC<Props> = ({ title }) => {
  return (
    <div className="header" style={HeaderStyle}>
      <h1>{`🎥 ${title}`}</h1>
    </div>
  );
};

export default Header;
