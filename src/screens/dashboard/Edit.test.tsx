import { render, screen } from "@testing-library/react-native";
import EditInventoryScreen from "./EditInventoryScreen";

describe("EditInventoryScreen", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(<EditInventoryScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
