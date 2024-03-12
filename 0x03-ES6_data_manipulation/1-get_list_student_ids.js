export default function getListStudentIds(arr) {
  if (typeof arr !== 'object' || !Object.hasOwn(arr, 'length')) {
    return [];
  }
  return arr.map((obj) => obj.id);
}
