/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-promise-executor-return */
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '../../components/ui/Buttons';

function Buttons() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buttons</title>
      </Helmet>

      <div className="container mx-auto my-10">
        <Link to="/">
          <h1 className="mb-2 text-l link text-gray-900 dark:text-gray-400">
            Home
          </h1>
        </Link>
        <h1 className="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-900">
          Buttons
        </h1>
        <div className="grid gap-4">
          <Button
            variant="default"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Button
          </Button>
          <Button
            variant="outline"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Outlined
          </Button>
          {/* <Button
            variant="outlineNoHover"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Outlined No Hover
          </Button> */}
          <Button
            variant="danger"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Danger
          </Button>
          <Button
            variant="success"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Success
          </Button>
          <Button
            variant="warning"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Warning
          </Button>
          <Button
            variant="link"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Link
          </Button>
          <Button
            variant="ghost"
            className={buttonVariants({ size: 'lg', className: 'w-fit' })}
          >
            Ghost
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
