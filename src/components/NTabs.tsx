import { Tab } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface Props {
  isFull?: boolean;
  tabs: string[];
  selected: number;
  setSelected?: any;
  children: ReactNode;
}

export const NTabs = (props: Props) => {
  const { isFull = false, tabs, selected, children } = props;

  return (
    <Tab.Group selectedIndex={selected} onChange={props.setSelected}>
      <Tab.List className={`nyn-tabs nyn-border-bottom${isFull ? ' grid grid-flow-col justify-stretch' : ''}`}>
        {tabs.map(tab => (
          <Tab as={Fragment} key={tab}>
            {({ selected }) => <button className={`nyn-tab px-3 py-2 ${selected ? 'nyn-tab-active' : 'nyn-tab-inactive'}`}>{tab}</button>}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="nyn-tabs-content w-full h-full">{children}</Tab.Panels>
    </Tab.Group>
  );
};