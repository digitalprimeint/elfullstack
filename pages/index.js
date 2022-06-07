import Head from 'next/head';
import Layout from './layout';
import { PageHeader, Row, Col, Divider, Descriptions } from 'antd';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>El Full Stack - dev+ops+data</title>
        <meta name="description" content="Fábrica de Software Web, Mobile, Backend, Desktop, y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col span={24}>
          <PageHeader
            className="titulo"
            title="Inicio"
            subTitle="Quién es elfullstack.com?"
          />
        </Col>
      </Row>
      <Divider orientation="left">Información</Divider>
      <Row>
        <Col span={24}>
          <Descriptions title="Arquitecto de Soluciones / Backend / Front-end / Ingeniero de Datos / DevOps" bordered>
            <Descriptions.Item label="Nombre completo">Marco A. Castillo Della Sera</Descriptions.Item>
            <Descriptions.Item label="Email">dellasera@gmail.com</Descriptions.Item>
            <Descriptions.Item label="País">Panamá</Descriptions.Item>
            <Descriptions.Item label="LinkedIn"><a href="https://www.linkedin.com/in/dellasera" target="_blank" rel="noreferrer">Abrir Perfil</a></Descriptions.Item>
            <Descriptions.Item label="CV"><a href="https://resume2022pty.s3.us-west-2.amazonaws.com/Marco-Castillo-Resume-2022.pdf" target="_blank" rel="noreferrer">Download PDF (Inglés)</a></Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Layout>
  )
}
