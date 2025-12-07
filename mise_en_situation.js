// let data = [
//     {
//         firstname: "aymane",
//         lastname: "benhima",
//         age: 33
//     }, 
//     {
//         firstname: "anas",
//         lastname: "choubri",
//         age: 28
//     },
//     {
//         firstname: "said",
//         lastname: "aabilla",
//         age: 24
//     }
// ]

// // for(let i=0; i<data.length; i++){
// //     console.log(data[i])
// // }

// // for (let afficher of data){
// //     console.log(afficher.firstname)
// //     console.log(afficher.lastname)
// //     console.log(afficher.age)
// // }

// // 1 - firstname : Ahmed, lastname : Rafye, age : 33
// // foreach

// // data.forEach((e,index) => console.log( index+1 ,'- firstname:', e.firstname,', lastname:', e.lastname, ', age:', e.age))

// // let sup = data.filter(n => n.age>25)
// // console.log(sup);

// document.getElementById("ajout").innerHTML =`
// <form>
// <div class="mb-3">
//     <label>nom:</label>
//     <input type="text" placeholder="nom"></div>
//     <div class="mb-3">
//     <label>prenom:</label>
//     <input type="text" placeholder="prenom"></div>
//     <div class="mb-3">
//     <label>age:</label>
//     <input type="number" placeholder="age"></div>
// </form>
// `
// document.getElementById("tableau").addEventListener("click", ()=>{
//     console.log(1);
//     document.querySelectorAll(".tr").innerHTML =`
// <thead>
//     <tr>
//       <th scope="col">Nom</th>
//       <th scope="col">Prenom</th>
//       <th scope="col">Age</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row"></th>
//       <td>Mark</td>
//       <td>Otto</td>
//     </tr>
//     <tr>
//       <th scope="row"></th>
//       <td></td>
//       <td>Thornton</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//     </tr>
//   </tbody>
// `
    
// })
