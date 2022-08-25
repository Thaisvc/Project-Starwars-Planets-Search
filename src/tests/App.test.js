import React from "react";
import { screen, waitFor } from "@testing-library/react";
import  renderWithRouter  from "../helpers/renderWithRouter";
import { act } from "react-dom/test-utils";
import App from "../App";
import planetsMock from "../helpers/planetsMock";

describe("testar App", () => {
  afterEach(() => jest.resetAllMocks());

  it("testa se os input renderiza", () => {
    expect.assertions(5);

    renderWithRouter(<App />);
    const InputText = screen.getByTestId("name-filter");
    const InputColumn = screen.getByTestId("column-filter");
    const InputSelect = screen.getByTestId("comparison-filter");
    const InputNunber = screen.getByTestId("value-filter");
    const btnToFilter = screen.getByTestId("button-filter");

    expect(InputText).toBeInTheDocument();
    expect(InputColumn).toBeInTheDocument();
    expect(InputSelect).toBeInTheDocument();
    expect(InputNunber).toBeInTheDocument();
    expect(btnToFilter).toBeInTheDocument();
  });

  it("Testando se Table está presente 11 linha", async () => {
    expect.assertions(1);

    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(planetsMock),
    });

    await act(async () => renderWithRouter(<App />));

    await waitFor(() => screen.getByText(planetsMock.results[0].name));
    const Rows = screen.getAllByRole("row");

    expect(Rows).toHaveLength(11);
  });
 
  
});