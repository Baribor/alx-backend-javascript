export default function handleResponseFromAPI(promise) {
  // eslint-disable-next-line no-unused-vars
  return promise.then((res) => console.log('Got a response from the API')).catch((err) => new Error());
}
