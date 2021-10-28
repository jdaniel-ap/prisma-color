import { screen, render, within } from '@testing-library/react';
import WallCalculator from '../pages/WallCalculator/WallCalculator';
import { createMemoryHistory } from 'history';
import {Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store'

describe('Calculator', () => {
  test('A página deve ter uma tag h2 com o titulo "Por favor, insira as dimensões da parede "', () => {
    const history = createMemoryHistory()
    history.push('/calculator/A');

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <WallCalculator/>
        </Router>
      </Provider>);

    const { getByText } = within(container.querySelector('h2'));


    expect(getByText('Por favor, insira as dimensões da parede')).toBeInTheDocument();
  });

  test('A página deve ter quatro inputs com os placeholders "Largura, Anchura, Portas, Janelas"', () => {
    const history = createMemoryHistory()
    history.push('/calculator/A');

    render(
      <Provider store={store}>
        <Router history={history}>
          <WallCalculator/>
        </Router>
      </Provider>);

    const largura = screen.getByPlaceholderText('Largura');
    const anchura = screen.getByPlaceholderText('Altura');
    const janelas = screen.getByPlaceholderText('Janelas');
    const portas = screen.getByPlaceholderText('Portas');

    expect(largura).toBeInTheDocument();
    expect(anchura).toBeInTheDocument();
    expect(janelas).toBeInTheDocument();
    expect(portas).toBeInTheDocument();
  });

  test('A page tem que ter uma tag com a classe "error"', () => {
    const history = createMemoryHistory()
    history.push('/calculator/A');

    const { container }= render(
      <Provider store={store}>
        <Router history={history}>
          <WallCalculator/>
        </Router>
      </Provider>);

    const alert = container.querySelector('.error');

    expect(alert).toBeInTheDocument();
  });

  test('A page tem que ter um button com o titulo "Salvar"', () => {
    const history = createMemoryHistory()
    history.push('/calculator/A');

    const { container }= render(
      <Provider store={store}>
        <Router history={history}>
          <WallCalculator />
        </Router>
      </Provider>);

    const { getByText } = within(container.querySelector('button'));

    expect(getByText('Salvar')).toBeInTheDocument();

  });

  test('A page tem que renderizar em todas los path validos"', async () => {
    const history = createMemoryHistory(["/calculator/A", "/calculator/B", "/calculator/C", "/calculator/D"]);

    const { debug }= render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/calculator/:wall" component={WallCalculator} />
        </Router>
      </Provider>);

      debug();


  });
});

