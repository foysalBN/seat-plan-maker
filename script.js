const rollsTextarea = document.querySelector('#rolls')
const listNameInp = document.querySelector('#list-name')


const handleAddStudentList = () => {

  const name = listNameInp.value
  const rolls = rollsTextarea.value
  const rollsArr = rolls.split('\n')
  const totalStudent = rollsArr.length

  const list = {
    name,
    rolls: rollsArr,
    totalStudent,
    remainingStudent: totalStudent
  }
  console.table(list);

  const tbody = document.querySelector('.student-list tbody')
  tbody.innerHTML += `
  <tr>
    <td>${name}</td>
    <td>${totalStudent}</td>
    <td>${totalStudent}</td>
  </tr>
  `



}


const addStudentListBtn = document.querySelector('#add-student-list')
addStudentListBtn.addEventListener('click', handleAddStudentList)
