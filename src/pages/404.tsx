import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  // If the pathname contains uppercase letters, redirect to lowercase pathname
  if (router.asPath !== router.asPath.toLowerCase()) {
    router.replace(router.asPath.toLowerCase());
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Custom404;
