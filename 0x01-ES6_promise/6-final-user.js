import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const re = [];
    try {
	const user = await signUpUser(firstName, lastName);
	re.push({ status: 'fulfilled', value: user });
	await uploadPhoto(fileName);
    } catch (err) {
	re.push({
	    status: 'rejected',
	    value: `Error: ${fileName} cannot be processed`,
	});
    }
    return re;
}
