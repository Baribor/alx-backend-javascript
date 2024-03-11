import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const [{ body }, { firstName, lastName }] = data;
    console.log(body, firstName, lastName);
  }).catch(() => console.log('Signup system offline'));
}
