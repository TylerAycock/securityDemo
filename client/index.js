const submit = document.getElementById(`submit`)
const submitBtn = document.getElementById(`submitBtn`)
const check = document.getElementById(`check`)
const checkBtn = document.getElementById(`checkBtn`)


const submitFunc = ()=>{
  axios.post(`http://localhost:5050/submit`, {banana:submit.value})
    .then(resp => console.log(resp.data))
    .catch(evt => console.log(evt))
}

const checkFunc = ()=>{
  axios.post(`http://localhost:5050/check`, {code: check.value})
  .then(resp => console.log(resp.data))
  .catch(err => console.log(err))
}




submitBtn.addEventListener(`click`, submitFunc)
checkBtn.addEventListener(`click`,checkFunc)