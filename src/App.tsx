import { Navigate, Route, Routes } from 'react-router-dom';
import { NTheme } from '@/components/NTheme';
import { THEMES } from '@/components/Types';
import Wrapper from '@/website/helpers/Wrapper';
import { useLocalStorage } from '@/components/NLocalStorage';
import Home from '@/website/home/Home';
import Installation from './website/installation/Installation';
import Accordion from './website/components/Accordion';
import Alert from './website/components/Alert';
import Badge from './website/components/Badge';
import Button from './website/components/Button';
import ButtonGroup from './website/components/ButtonGroup';
import Card from './website/components/Card';
import Checkbox from './website/components/Checkbox';
import Combobox from './website/components/Combobox';
import ConfirmAlert from './website/components/ConfirmAlert';
import Dialog from './website/components/Dialog';
import Divider from './website/components/Divider';
import InfiniteScroll from './website/components/InfiniteScroll';
import Input from './website/components/Input';
import Link from './website/components/Link';
import Linkify from './website/components/Linkify';
import Menu from './website/components/Menu';
import Popover from './website/components/Popover';
import Progress from './website/components/Progress';
import RadioGroup from './website/components/RadioGroup';
import Select from './website/components/Select';
import Sheet from './website/components/Sheet';
import Skeleton from './website/components/Skeleton';
import Slider from './website/components/Slider';
import Switch from './website/components/Switch';
import Tabs from './website/components/Tabs';
import Textarea from './website/components/Textarea';
import Toast from './website/components/Toast';
import Tooltip from './website/components/Tooltip';
import Contribution from './website/contributions/Contribution';
import Loading from './website/components/Loading';
import Table from '@/website/components/Table';

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  return (
    <NTheme theme={theme}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/components">
            <Route index element={<Accordion />} />
            <Route path="accordion" element={<Accordion />} />
            <Route path="alert" element={<Alert />} />
            <Route path="badge" element={<Badge />} />
            <Route path="button" element={<Button />} />
            <Route path="button-group" element={<ButtonGroup />} />
            <Route path="card" element={<Card />} />
            <Route path="checkbox" element={<Checkbox />} />
            <Route path="combobox" element={<Combobox />} />
            <Route path="confirm-alert" element={<ConfirmAlert />} />
            <Route path="dialog" element={<Dialog />} />
            <Route path="divider" element={<Divider />} />
            <Route path="infinite-scroll" element={<InfiniteScroll />} />
            <Route path="input" element={<Input />} />
            <Route path="link" element={<Link />} />
            <Route path="linkify" element={<Linkify />} />
            <Route path="loading" element={<Loading />} />
            <Route path="menu" element={<Menu />} />
            <Route path="popover" element={<Popover />} />
            <Route path="progress" element={<Progress />} />
            <Route path="radio-group" element={<RadioGroup />} />
            <Route path="select" element={<Select />} />
            <Route path="sheet" element={<Sheet />} />
            <Route path="skeleton" element={<Skeleton />} />
            <Route path="slider" element={<Slider />} />
            <Route path="switch" element={<Switch />} />
            <Route path="table" element={<Table />} />
            <Route path="tabs" element={<Tabs />} />
            <Route path="textarea" element={<Textarea />} />
            <Route path="toast" element={<Toast />} />
            <Route path="tooltip" element={<Tooltip />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
    </NTheme>
  );
};

export default App;
