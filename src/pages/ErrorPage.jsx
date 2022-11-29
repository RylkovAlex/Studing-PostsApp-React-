import { useRouteError, Link } from 'react-router-dom';
import Button from '../Components/UI/button/Button';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ marginBottom: '30px' }}>
        {error ? <i>{error.statusText || error.message}</i> : null}
      </p>
      <Link to="/">
        <Button>Go to maim page</Button>
      </Link>
    </div>
  );
}
