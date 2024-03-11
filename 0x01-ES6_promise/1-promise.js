export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve({
      status: 200,
      message: 'Success',
    });
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
