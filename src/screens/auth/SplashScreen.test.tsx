import { render, screen } from "@testing-library/react-native";
import SplashScreen from "./SplashScreen";

describe("SplashScreen", () => {
  it("matches the snapshot", () => {
    const { toJSON } = render(<SplashScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
