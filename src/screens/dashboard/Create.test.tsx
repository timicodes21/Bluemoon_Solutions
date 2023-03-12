import { render, screen } from "@testing-library/react-native";
import CreateInventoryScreen from "./CreateInventoryScreen";

describe("CreateInventoryScreen", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(<CreateInventoryScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
