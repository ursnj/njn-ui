import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from './Icons';

interface Props {
  items: any;
  selected: any;
  onSelected: (val: any) => void;
}

export const NCombo = (props: Props) => {
  const { selected, items } = props;
  const [query, setQuery] = useState('');

  const filteredItems =
    query === ''
      ? items
      : items.filter((item: any) => item.label.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')));

  return (
    <Combobox value={selected} onChange={props.onSelected} {...(Array.isArray(selected) ? ({ multiple: true } as any) : {})}>
      <div className="relative">
        <div className="relative w-full cursor-default overflow-hidden rounded text-left">
          <Combobox.Input
            className="nyn-combo-input w-full py-2 pl-3 pr-10 text-sm leading-5 nyn-background-card nyn-border rounded nyn-text focus:ring-0"
            displayValue={(item: any) => (Array.isArray(item) ? item.length + ' selected' : item.label)}
            onChange={event => setQuery(event.target.value)}
          />
          <Combobox.Button className="nyn-combo-icon absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 nyn-text-muted" aria-hidden="true" />
          </Combobox.Button>
        </div>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery('')}>
          <Combobox.Options className="nyn-combo-options absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded nyn-background-card nyn-border py-1 shadow-lg">
            {filteredItems.map((item: any) => (
              <Combobox.Option
                key={item.id}
                value={item}
                disabled={!!item.disable}
                className={({ active }) =>
                  `nyn-combo-option relative cursor-default select-none py-2 pl-10 pr-4 ${
                    !!item.disable ? 'nyn-text-muted cursor-not-allowed' : 'nyn-text cursor-pointer'
                  } ${active ? 'background-muted' : ''}`
                }>
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.label}</span>
                    {selected ? (
                      <span className="nyn-combo-option-icon absolute inset-y-0 left-0 flex items-center pl-3 nyn-text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};