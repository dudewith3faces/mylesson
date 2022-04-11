import {
  CardComponent,
  TextInputComponent,
  MovieComponent,
} from './components';
import { MovieSearchService } from './services';

import './App.css';

function App() {
  const { onSubmit, onChange, q, movies, hasSearched } = MovieSearchService();

  return (
    <div className='App'>
      <main className='container'>
        <header className='d-flex'>
          <h1 className='mx-auto'>Movie Search</h1>
        </header>

        <section className='my-5'>
          <CardComponent>
            <form role='form' onSubmit={onSubmit}>
              <div className='d-flex flex-row'>
                <TextInputComponent
                  name='q'
                  placeholder='Search movie'
                  onChange={onChange}
                  value={q}
                  type='text'
                />
              </div>
              <button className='hide'>Search Movies</button>
            </form>
          </CardComponent>
        </section>

        <section role='row' className='d-flex flex-wrap'>
          {hasSearched ? (
            movies.length > 0 ? (
              movies.map((data) => <MovieComponent key={data.id} {...data} />)
            ) : (
              <div className='d-flex justify-content-center'>
                <p>No data found</p>
              </div>
            )
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
