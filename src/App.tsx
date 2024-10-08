import Card from './components/Card';
import './app.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ButtonImage from './components/ButtonImage';
import link from './assets/link.svg';
import group from './assets/Regroup.svg';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  interface DataState {
    author: string;
    content: string;
    tags: [];
  }

  const [data, setData] = useState<DataState>({
    author: '',
    content: '',
    tags: [],
  });

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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast('Copy Successfully.');
  };

  return (
    <>
      <div className="container">
        <Card author={data.author} content={data.content} tags={data.tags} />
        <div className="buttons">
          <ButtonImage OnClick={handleChange} src={group} />
          <ButtonImage OnClick={() => handleCopy(content)} src={link} />
          <Toaster />
        </div>
      </div>
    </>
  );
}

export default App;
