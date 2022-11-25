import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.searchQuery}
        placeholder={'Поиск'}
        onChange={(evt) =>
          setFilter({
            ...filter,
            searchQuery: evt.target.value,
          })
        }
      />
      <Select
        options={[
          { value: 'name', text: 'По названию' },
          { value: 'desc', text: 'По описанию' },
        ]}
        defaultValue={'Сортировка'}
        value={filter.sortBy}
        onChange={(evt) =>
          setFilter({
            ...filter,
            sortBy: evt.target.value,
          })
        }
      />
    </div>
  );
};

export default PostFilter;
