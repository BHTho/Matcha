export default async function checkToken() {
	try {
		console.log('Checking token validity...');
        const response = await fetch('/api/users/check-token', {
			method: 'GET',
			credentials: 'include',
		});
		if (!response.ok) {
			throw new Error('Token check failed');
		}
		const data = await response.json();
		return data.isValid;
	} catch (error) {
		console.error('Error checking token:', error);
		return false;
	}
}