import {
  CardComponent,
  TextInputComponent,
  MovieComponent,
} from './components';
import { MovieSearchService } from './service';

import './App.css';

function App() {
  const { onSubmit, onChange, q, movies } = MovieSearchService();

  const moviesUi = movies.map((data) => (
    <MovieComponent key={data.id} {...data} />
  ));

  return (
    <div className='App'>
      <main className='container'>
        <header className='d-flex'>
          <h1 className='mx-auto'>Movie Search</h1>
        </header>

        <section className='my-5'>
          <CardComponent>
            <form onSubmit={onSubmit}>
              <div className='d-flex flex-row'>
                <TextInputComponent
                  name='q'
                  placeholder='Search movie'
                  onChange={onChange}
                  value={q}
                  type='text'
                />
              </div>
            </form>
          </CardComponent>
        </section>

        <section className='d-flex flex-wrap'>{moviesUi}</section>
      </main>
    </div>
  );
}

export default App;
