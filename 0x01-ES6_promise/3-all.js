import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  await Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const [{ body }, { firstName, lastName }] = data;
    console.log(body, firstName, lastName);
  }).catch(() => console.log('Signup system offline'));
}
