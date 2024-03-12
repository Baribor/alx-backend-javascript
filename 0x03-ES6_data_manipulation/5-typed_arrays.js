export default function createInt8TypedArray(length, position, value) {
  const data = new DataView(new ArrayBuffer(length)).setUint8(0, value);
  return data;
}
