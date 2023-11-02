import { NavLink } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-gray-900">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
        Sorry... Page Not Found
      </div>
      <button className="mt-5" type="button">
        <NavLink
          className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500"
          to="/"
        >
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
          <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
            Go Home
          </span>
        </NavLink>
      </button>
    </div>
  );
}

export default NotFound;
