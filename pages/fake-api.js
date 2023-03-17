import AppNav from '@/components/AppNav';
import Example from '@/components/Example';
import Footer from '@/components/Footer';
import HerosFakeAPI from '@/components/HerosFakeAPI';
import { Button } from 'react-bootstrap';

export default function FakeAPI() {
  return (
    <>
      <AppNav />
      <div className='container'>
        <HerosFakeAPI />
        <Example />
        <Footer />
      </div>
    </>
  );
}