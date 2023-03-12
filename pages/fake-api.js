import AppNav from '@/components/AppNav';
import Example from '@/components/Example';
import HerosFakeAPI from '@/components/HerosFakeAPI';
import { Button } from 'react-bootstrap';

export default function FakeAPI() {
  return (
    <>
      <AppNav />
      <HerosFakeAPI />
      <Example />
    </>
  );
}