import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { Header, Container } from '../app/shared/layout';
import { useDashboard } from '../app/services/dashboard/index';
import { Gallery } from '../app/components/galery/index';

const PARTICLE_FORWARD = 'Particle Forward';

const Dashboard: NextPage = () => {
  const { data, loading } = useDashboard();
  return (
    <>
      <Head>
        <title>{PARTICLE_FORWARD}</title>
        <meta name={PARTICLE_FORWARD} content={PARTICLE_FORWARD} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <h1>Car photos</h1>
        <Gallery images={data?.images} loading={loading} />
      </Container>
    </>
  );
};

export default Dashboard;
