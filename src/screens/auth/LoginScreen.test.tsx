import { render, screen } from "@testing-library/react-native";
import LoginScreen from "./LoginScreen";

describe("LoginScreen", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(<LoginScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
