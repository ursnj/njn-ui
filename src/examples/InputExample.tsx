import { NJInput } from '../components/NJInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const InputExample = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState('niranjan.devasani@gmail.com');

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Custom Input:</h1>
      <NJInput type="email" label="Email" placeholder="Enter email" className="mb-3" value={email} onChange={e => setEmail(e.target.value)} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text mb-3 mt-3 text-lg text-left">React Hook Form Input:</h1>
        <NJInput
          type="email"
          label="Email"
          placeholder="Enter email"
          className="mb-3"
          defaultValue="niranjan.devasani@gmail.com"
          {...register('email')}
        />
      </form>
    </>
  );
};

export default InputExample;
