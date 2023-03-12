import { render, screen } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

describe("HomeScreen", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
