import { screen, render, within } from '@testing-library/react'
import Home from "../pages/Home/Home";

describe('Home Page', () => {
  test('A  home page tem que ter um aside', () => {
    const { container} = render(<Home />);

    const asideSection = container.querySelector('aside');

    expect(asideSection).toBeInTheDocument();

  });


  test('O aside tem que ter o nome da empresa', () => {
    render(<Home />);

    const companyName = screen.getByText('Prisma-color')

    expect(companyName).toBeInTheDocument();
  });

  test('A  home page tem que ter uma main section', () => {
    const { container} = render(<Home />);

    const mainSection = container.querySelector('main');

    expect(mainSection).toBeInTheDocument();

  });


  test('A main section tem que ter o texto "Bem-vindo à nossa calculadora de tinta"', () => {
    render(<Home />);

    const welcomeText = screen.getByText('Bem-vindo à nossa calculadora de tinta')

    expect(welcomeText).toBeInTheDocument();
  });


  test('A  home page tem que ter um button para iniciar o aplicativo com a palavra "Começar"', () => {
    const { container} = render(<Home />);

    const { getByText } = within(container.querySelector('button'));

    expect(getByText('Començar')).toBeInTheDocument();

  });

})