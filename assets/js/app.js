// let tabs = document.querySelectorAll(".tabs li");
// // console.log(tabs);
// let paragraph = document.querySelectorAll(".info");
// // console.log(paragraph)

// tabs = Array.from(tabs);
// paragraph = Array.from(paragraph);

// let onClick = (ele => {
//     tabs.forEach(tab => { 
//         tab.classList.remove("active");
//     })
//     ele.target.classList.add("active");
//     paragraph.forEach(para => { 
//         para.classList.remove("para-active")
//     })
//     let id = ele.target.dataset.info;
//     console.log(id);
//     let selectedpara = document.getElementById(id);
//     console.log(selectedpara);
//     selectedpara.classList.add("para-active");
// })

// tabs.forEach(tab => {
//     tab.addEventListener("click", onClick);
// })


// // using identical id relation
// // let onClick = (e => {
// //     // console.log("cllicked.");
// //     // for tabs
// //     tabs.forEach(tab => {
// //         tab.classList.remove("active");
// //     })
// //     e.target.classList.add("active");

// //     // for paragraph
// //     paragraph.forEach(para => {
// //         para.classList.remove("para-active");
// //     })
// //     let id = e.target.innerText;
// //     // console.log(id);
// //     let selectedPara = document.getElementById(id);
// //     // console.log(selectedPara);
// //     selectedPara.classList.add("para-active")
// // })

// //      event........




let tabs = document.querySelectorAll(".tabs li");
// console.log(tabs);
let paras = document.querySelectorAll(".info");
// console.log(paras);
tabs = Array.from(tabs);
paras =Array.from(paras);

//  functions ----> 

// using identical id relation
// let onClick = (e => {
//     // console.log("cllicked.");
//     // for tabs
//     tabs.forEach(tab => {
//         tab.classList.remove("active");
//     })
//     e.target.classList.add("active");

//     // for paras
//     paras.forEach(para => {
//         para.classList.remove("para-active");
//     })
//     let id = e.target.innerText;
//     // console.log(id);
//     let selectedPara = document.getElementById(id);
//     // console.log(selectedPara);
//     selectedPara.classList.add("para-active")
// })




// using custom attribute relation
let onClick = (e => {
    // for tabs
    tabs.forEach(tab => {
        tab.classList.remove("active");
    })
    e.target.classList.add("active");
    // for paras
    paras.forEach(para => {
        para.classList.remove("para-active");
    })

    let id = e.target.dataset.info;
    // console.log(id);
    let selectedPara = document.getElementById(id);
    console.log(selectedPara);
    selectedPara.classList.add("para-active")
})

//  events ----->

tabs.forEach(tab => {
    tab.addEventListener("click", onClick);
})