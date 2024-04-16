// 3-get_ids_sum.js

const getStudentIdsSum = (students) => students.reduce((prevVal, cur) => prevVal + cur.id, 0);

export default getStudentIdsSum;

