// 1-get_list_student_ids.js

const getListStudentIds = (getList) => {
  let lisdata = [];
  if (!(getList instanceof Array)) {
    return lisdata;
  }
  lisdata = getList.map((results) => results.id);
  return lisdata;
};
export default getListStudentIds;
