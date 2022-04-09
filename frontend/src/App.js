import { CardComponent, TextInputComponent } from './components';
import './App.css';
import { MovieSearchService } from './service';

function App() {
  const { onSubmit, onChange, q } = MovieSearchService();
  return (
    <div className='App'>
      <main className='container'>
        <header className='d-flex'>
          <h1 className='mx-auto'>Movie Search</h1>
        </header>

        <section>
          <CardComponent>
            <form onSubmit={onSubmit}>
              <div className='d-flex'>
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
      </main>
    </div>
  );
}

export default App;
