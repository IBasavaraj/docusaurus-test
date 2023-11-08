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


  useEffect(() => {

    // Replace 'username' and 'repo-name' with the GitHub repository details
    const repoUrl = 'https://github.com/IBasavaraj/todo-react';
const readmeEndpoint = `https://cors-anywhere.herokuapp.com/${repoUrl}/readme`;

    console.log("readmeEndpoint", readmeEndpoint);
    fetch(readmeEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const readme = atob(data.content); // Decode Base64 content
        setReadmeContent(readme);
        console.log("readme", readme);
      })
      .catch((error) => console.error('Error fetching README content:', error));
  }, []);

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
