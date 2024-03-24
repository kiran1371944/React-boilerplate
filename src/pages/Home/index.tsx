/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-promise-executor-return */
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
// import { Button, buttonVariants } from '../../components/ui/Button';

function Home() {
  interface Data {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const wait = async (ms: number) => {
    await new Promise((resolve) => setTimeout(resolve, ms));
  };
  const { data, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      await wait(5000);
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1 '
      );
      return data as Data;
    },
  });
  console.log(data, isLoading);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home page</title>
      </Helmet>
      <div className="container mx-auto my-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">UI Components</h1>
        {/* {isLoading ? <Skeleton /> : JSON.stringify(data)} */}
        <ul className="max-w-md space-y-1 text-black list-disc list-inside">
          <li>
            {' '}
            <Link to="buttons">
              <span className="link">Buttons</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="table">
              {' '}
              <span className="link">Tables</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="colours">
              {' '}
              <span className="link">Colours</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="inputs">
              {' '}
              <span className="link">Inputs</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="imageUpload">
              {' '}
              <span className="link">Upload</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="admin">
              {' '}
              <span className="link">Admin Panel</span>
            </Link>
          </li>
          <li>
            <Link to="signin">
              {' '}
              <span className="link">Login</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="form">
              {' '}
              <span className="link">Form</span>
            </Link>
          </li>

          <li>
            {' '}
            <Link to="profile">
              {' '}
              <span className="link">profile</span>
            </Link>
          </li>
          <li>
            {' '}
            <Link to="filter">
              {' '}
              <span className="link">Filter Form</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
