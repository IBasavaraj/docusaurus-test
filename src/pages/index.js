import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const [readmeContent, setReadmeContent] = useState('');
  const {siteConfig} = useDocusaurusContext();

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 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"
  );
  myHeaders.append("Cookie", "_octo=GH1.1.2052129370.1699438329; logged_in=no");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.github.com/repos/Yashwithajuegostudio/to-do-list/readme",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const readme = atob(result.content);
      setReadmeContent(readme)})
    .catch((error) => console.log("error", error));

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
          <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
