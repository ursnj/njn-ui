import React from 'react';
import { NLoading } from '@/components/NLoading';
import Code from '../helpers/Code';
import Sidebar from '../helpers/Sidebar';
import SubHeader from '../helpers/SubHeader';
import { loadingCode } from '../services/CodeBlocks';
import Attributes from '@/website/helpers/Attributes';
import { loadingAttributes } from '@/website/services/Attributes';

const Badge = () => {
  return (
    <Sidebar title="Loading">
      <div className="mb-5">Displays a loading icon with nice animation.</div>

      <SubHeader title="Demo">
        <NLoading className="text-[6px] text-red-500" />
      </SubHeader>

      <Attributes data={loadingAttributes} />

      <SubHeader title="Usage">
        <Code code={loadingCode} />
      </SubHeader>
    </Sidebar>
  );
};

export default Badge;
