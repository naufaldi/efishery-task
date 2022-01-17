import FormComodity from '@/components/Comodity/FormComodity';
import Hero from '@/components/Comodity/Hero';
import Layout from '@/components/Layout/Layout';
import React from 'react';

const AddData = () => {
  return (
    <Layout title="Add Data | Data Komoditas eFishery">
      <Hero />
      <FormComodity />
    </Layout>
  );
};

export default AddData;
