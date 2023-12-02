import Link from "next/link";

const Nav = () => {
  return (
    <nav className='flex justify-between items-center py-6 w-full'>
      <Link href='/'>
        <h1 className='text-3xl text-customWhite font-bold'>
          Slash <span className='text-customLime text-2xl'>Seller</span>
        </h1>
      </Link>

      <div className='flex gap-4'>
        <Link
          href='/signin'
          className='py-3 px-9 font-bold bg-customLime text-customMain rounded-lg transition duration-300 ease-in-out hover:brightness-75'
        >
          Sign In
        </Link>

        <Link
          href='/signup'
          className='py-3 px-9 font-bold bg-customWhite text-customMain rounded-lg transition duration-300 ease-in-out hover:bg-gray-300'
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
