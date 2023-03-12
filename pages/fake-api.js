import AppNav from '@/components/AppNav';
import Example from '@/components/Example';
import Heros from '@/components/Heros';
import { Button } from 'react-bootstrap';

export default function FakeAPI() {
  return (
    <>
      <AppNav />
      <Heros />
      <Example />
    </>
  );
}