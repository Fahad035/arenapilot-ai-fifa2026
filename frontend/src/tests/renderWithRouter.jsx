import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const renderWithRouter = (ui) => {
  return render(
    <BrowserRouter>
      {ui}
    </BrowserRouter>
  );
};

export default renderWithRouter;