
let form=document.querySelector('form')
let allanchor=document.querySelector("#allanchor")
let allemp=document.querySelector('.allemp')
let create_section=document.querySelector('#create_section')
allanchor.children[1].addEventListener('click',e=>{
    e.preventDefault()
    let payload = []
    for(i=0; i<12; i++){
    payload.push('')
    }
    key(payload)


})
allanchor.children[0].addEventListener('click',async e=>{
    e.preventDefault()
    create_section.style.display='none';

    let data=await window.fetch(`http://localhost:5000/api/get-emp`);
    let {payload}=await data.json()
      console.log(payload);
     
      for(let x of payload){
        alluser(Object.values(x))
        console.log(Object.values(x));
       
      }
        
})

function key(payload){
    
    let out='';

        out=`
        <form data-id=${payload[11]}>
        <div><input type="text" name="" id="empid" placeholder="enter the emp id" value=${payload[0]}></div>
        <div><input type="text" name="" id="empname"  placeholder="enter the empname" value=${payload[1]}></div>

        <div><input type="text" name="" id="empdetails" placeholder="enter the details" value=${payload[2]}></div>
        <div><input type="number" name="" id="empphone" placeholder="enter the phone no" value=${payload[3]}></div>
        <div><input type="number" name="" id="empexp" placeholder="enter the exp " value=${payload[4]}></div>
        <div><input type="text" name="" id="empedu" placeholder="enter the  edu" value=${payload[5]}></div>
        <div><input type="text" name="" id="empdesignation" placeholder="enter the designation" value=${payload[6]}></div>
        <div>
            <input type="text" name="" id="empgender" placeholder="enter the gender" value=${payload[7]}>
        
       </div>
        <div><input type="text" name="" id="" placeholder="enter the city" value=${payload[8]}></div>
        <div><input type="text" name="" id="" placeholder="enter the salary" value=${payload[9]}></div>
        <div>
            <input type="text" name="" id="" placeholder="enter the skills" value=${payload[10]}>
            </div>
        <div><input type="email" name="" id="" placeholder="enter the gmail" value=${payload[11]}></div>
        <div>
            <button>submit</button>
        </div>

        </form>
         
        `
        create_section.innerHTML+=out 
    }
    
function alluser(payload){
    out=''
    out+=`
     <div data-id=${payload[0]}><div>
     <p>${payload[1]}</p>
    `
    allemp.innerHTML+=out
}



// let fetchEmpdetails=async()=>{
//     form.addEventListener('submit',async e=>{
//         e.preventDefault()
//         let emp_id=e.target[0].value;
//         let emp_name=e.target[1].value;
//         let emp_details=e.target[2].value;
//         let emp_phone=e.target[3].value;
//         let emp_exp=e.target[4].value;
//         let emp_edu=e.target[5].value;
//         let emp_designation=e.target[6].value;
//         let emp_gender=e.target[7].value;
//         let emp_city=e.target[8].value;
//         let emp_salary=e.target[9].value;
//         let emp_skills=e.target[10].value;
//         let emp_gmail=e.target[11].value;
//         let payload={emp_id,emp_name,emp_details,emp_phone,emp_exp,emp_edu,emp_designation,emp_gender,emp_city,emp_salary,emp_skills,emp_gmail}
//         console.log(payload)
        
//         await window.fetch(`http://localhost:5000/api/emp/62fb863400057eceeb836fe7`,{
//             method:"PUT",
//             mode:"cors",
//             body:JSON.stringify(payload),
//             headers:{
//                 "content-type":"application/json"
//             },
           
           
//         })

    
//     })
// }
// fetchEmpdetails()
