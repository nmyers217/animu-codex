import React from 'react';
import { useForm } from 'react-hook-form';

export interface SearchFormState {
  search: string;
}

export const defaultFormState = () => {
  return { search: '' };
};

interface SearchFormProps {
  onSubmit: (data: SearchFormState) => void;
  defaults: SearchFormState;
}

function SearchForm({ onSubmit, defaults }: SearchFormProps) {
  const { register, handleSubmit, errors } = useForm<SearchFormState>({
    defaultValues: defaults,
  });

  return (
    <div className="container mx-auto max-w-5xl p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-between space-x-4">
          <input
            type="text"
            name="search"
            defaultValue=""
            placeholder="Search"
            ref={register}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:opacity-50"
          />

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
