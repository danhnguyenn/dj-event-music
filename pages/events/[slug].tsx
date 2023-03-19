import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function EventPage() {
	const router = useRouter();

	console.log(router);

	return (
		<Layout title="My event">
			<h1>My Event</h1>
		</Layout>
	);
}
