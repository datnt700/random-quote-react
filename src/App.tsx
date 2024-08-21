import Card from './components/Card';
import './app.scss';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import ButtonImage from './components/ButtonImage';
import link from '../assets/link.svg';
import group from '../assets/Regroup.svg';
import toast, { Toaster } from 'react-hot-toast';
import Toast from './components/Toast';
import successIcon from '../assets/SuccessIcon.svg';

interface DataState {
  author: string;
  content: string;
  tags: [];
}
function App() {
  const [data, setData] = useState<DataState>({
    author: '',
    content: '',
    tags: [],
  });
  const toastRef = useRef<{ showToast: (msg: string) => void } | null>(null);
  const [content, setContent] = useState('');

  const getData = async () => {
    const quote = await axios.get('https://api.quotable.io/random');
    setData(quote.data);
    setContent(quote.data.content);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = () => {
    getData();
  };

  const handleCopy = () => {
    if (toastRef.current) {
      toastRef.current.showToast('Logged in successfully');
    }
  };

  return (
    <>
      <div className="container">
        <Toast ref={toastRef} src={successIcon} />
        <Card author={data.author} content={data.content} tags={data.tags} />
        <div className="buttons">
          <ButtonImage onclick={handleChange} src={group} />
          <ButtonImage onclick={() => handleCopy()} src={link} />
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
