import React from 'react';
import { useRouter } from 'next/router';

export default function ClientProjectsPage() {
	const router = useRouter();
	console.log(router.query);
	return <h1>The Client Projects Page</h1>;
}
