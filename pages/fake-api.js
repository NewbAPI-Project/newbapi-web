import AppHeader from '@/components/AppHeader';
import AppNav from '@/components/AppNav';
import Example from '@/components/Example';
import Footer from '@/components/Footer';
import HerosFakeAPI from '@/components/HerosFakeAPI';
import { Button } from 'react-bootstrap';

export default function FakeAPI() {
  return (
    <>
      <AppHeader 
        title={'NewbAPI — Fake API'} 
        desc={'Free fake API created by a backend developer for frontend developers to use'} 
        og={'https://newbapi.com/fakeapi.png'} 
      />
      <AppNav />
      <div className='container'>
        <HerosFakeAPI />
        <Example />
        <Footer />
      </div>
    </>
  );
}