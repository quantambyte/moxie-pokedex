'use client';

export default function Error() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='pokemon-spinner' />
      <h1 className='text-4xl font-bold mt-8 text-center text-red-600'>
        Oops! Something went wrong.
      </h1>
      <p className='text-lg mt-4 text-gray-700'>
        We encountered an error processing your request. Please try again!
      </p>
    </div>
  );
}
