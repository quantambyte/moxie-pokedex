export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='pokemon-spinner' />
      <h1 className='text-4xl font-bold mt-8 text-center text-indigo'>
        Oops! Page not found.
      </h1>
      <p className='text-lg mt-4 text-gray-700'>
        We couldn&apos;t find the page you were looking for. Maybe it escaped!
      </p>
    </div>
  );
}
