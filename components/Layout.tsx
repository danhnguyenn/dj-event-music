import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/router';

interface PageProps {
	title: string;
	keyword: string;
	description: string;
	children: ReactNode;
}

export default function Layout({
	title,
	keyword,
	description,
	children
}: PageProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keyword} />
			</Head>
			<Header />

			{router.pathname === '/' && <Showcase />}

			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	);
}

Layout.defaultProps = {
	title: 'DJ Events | Find the hottest parties',
	description: 'Find the lastest DJ and other musical events',
	keyword: 'music, dj, edm, events'
};
