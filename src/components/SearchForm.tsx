import React from 'react';
import { useForm } from 'react-hook-form';

export interface SearchFormState {
  search: string;
  status: string;
}

export const defaultFormState = () => {
  return { search: '', status: 'All Statuses' };
};

interface SearchFormProps {
  onSubmit: (data: SearchFormState) => void;
  defaults: SearchFormState;
}

function SearchForm({ onSubmit, defaults }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormState>({
    defaultValues: defaults,
  });

  return (
    <div className="container mx-auto max-w-5xl p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="flex flex-col sm:flex-row flex-grow justify-between space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              name="search"
              defaultValue=""
              placeholder="Search"
              ref={register}
              className="block w-full text-base rounded-md rounded-border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:opacity-50 outline-none dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700 dark:focus:border-indigo-500 dark:focus:bg-gray-900 dark:focus:ring-indigo-900 dark:text-gray-100 transition-colors duration-200 ease-in-out"
            />

            <select
              name="status"
              ref={register}
              className="block w-full text-base rounded-md rounded-border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:opacity-50 outline-none dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700 dark:focus:border-indigo-500 dark:focus:bg-gray-900 dark:focus:ring-indigo-900 dark:text-gray-100 transition-colors duration-200 ease-in-out"
            >
              <option>All Statuses</option>
              <option>Finished</option>
              <option>Releasing</option>
              <option>Not Yet Released</option>
              <option>Cancelled</option>
              <option>Hiatus</option>
            </select>
          </div>

          <input
            type="submit"
            value="Go!"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
