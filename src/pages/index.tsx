import Hero from '@/components/Homepage/Hero';
import ListData from '@/components/Homepage/ListData';
import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const IndexPage: NextPage = () => (
  <Layout title="Homepage | Data eFishery">
    <Hero />
    <ListData />
  </Layout>
);

export default IndexPage;
