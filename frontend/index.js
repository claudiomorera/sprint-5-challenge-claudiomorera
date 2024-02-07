async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  
  try {
    const res = await axios.get(`http://localhost:3003/api/learners`);
    const res2 = await axios.get(`http://localhost:3003/api/mentors`);
    
    const learners = res.data;
    const mentors = res2.data;
     
  //First create components to avoid repetition and set the divParent.cards
  let divParent = document.getElementsByClassName("cards")[0];

  //Component divElement
  function divElement (className){
    let div = document.createElement('div');
    div.classList.add(className);
    return div;
  }
  
  //The Rest Of the Components will be added to the divElement Component header_3 (h3) Element is for the student_name, divChild for their email, header_4 for the dropdown
  function header_3 (text){
    let h3 = document.createElement('h3');
    h3.textContent = text;
    return h3;
  }
  function divChild (text){
    let div = document.createElement('div');
    div.textContent = text;
    return div;
  }
  function header_4 (className){
    let h4 = document.createElement('h4');
    h4.textContent = 'Mentors';
    h4.classList.add(className);
    return h4;
  }
  function unordered_list(){
    let ul = document.createElement('ul');
    return ul;
  }
  function li_elem(text){
    let li = document.createElement('li');
    li.textContent = text;
    return li;
  }


  function filterFun(learnersArray, mentorArray, i){
    let filt = mentorArray.filter ((item) => {
      return item.id === learnersArray[i];
    });
    return filt;
  }


  //First-card
  let div_one = divElement ("card");
  divParent.appendChild(div_one);

  let h3_one = header_3(`${learners[0].fullName}`);
  let divChild_one = divChild(`${learners[0].email}`);
  let h4_one = header_4('closed');
  let ul_one = unordered_list();

  let first_filter = filterFun(learners[0].mentors, mentors, 0);
  let first_one_filter = filterFun(learners[0].mentors, mentors, 1);
  let li_one = li_elem(`${first_filter[0].firstName} ${first_filter[0].lastName}`);
  let li_onev2 = li_elem(`${first_one_filter[0].firstName} ${first_one_filter[0].lastName}`)

  div_one.appendChild(h3_one);
  div_one.appendChild(divChild_one);
  div_one.appendChild(h4_one);
  div_one.appendChild(ul_one);
  ul_one.appendChild(li_one);
  ul_one.appendChild(li_onev2);
  //Second-card
  let div_two = divElement ("card");
  divParent.appendChild(div_two);

  let h3_two = header_3(`${learners[1].fullName}`);
  let divChild_two = divChild(`${learners[1].email}`);
  let h4_two = header_4('closed');
  let ul_two = unordered_list();

  let second_filter = filterFun(learners[1].mentors, mentors, 0);
  let second_two_filter = filterFun(learners[1].mentors, mentors, 1);
  let li_second = li_elem(`${second_filter[0].firstName} ${second_filter[0].lastName}`);
  let li_secondv2 = li_elem(`${second_two_filter[0].firstName} ${second_two_filter[0].lastName}`);

  div_two.appendChild(h3_two);
  div_two.appendChild(divChild_two);
  div_two.appendChild(h4_two);
  div_two.appendChild(ul_two);
  ul_two.appendChild(li_second);
  ul_two.appendChild(li_secondv2);
  

  //Third-card
  let div_three = divElement ("card");
  divParent.appendChild(div_three);

  let h3_three = header_3(`${learners[2].fullName}`);
  let divChild_three = divChild(`${learners[2].email}`);
  let h4_three = header_4('closed');
  let ul_three = unordered_list();

  let third_filter = filterFun(learners[2].mentors, mentors, 0);
  let third_two_filter = filterFun(learners[2].mentors, mentors, 1);
  let li_third = li_elem(`${third_filter[0].firstName} ${third_filter[0].lastName}`);
  let li_thirdv2 = li_elem(`${third_two_filter[0].firstName} ${third_two_filter[0].lastName}`);

  div_three.appendChild(h3_three);
  div_three.appendChild(divChild_three);
  div_three.appendChild(h4_three);
  div_three.appendChild(ul_three);
  ul_three.appendChild(li_third);
  ul_three.appendChild(li_thirdv2)


  //Four-card
  let div_four = divElement ("card");
  divParent.appendChild(div_four);

  let h3_four = header_3(`${learners[3].fullName}`);
  let divChild_four = divChild(`${learners[3].email}`);
  let h4_four = header_4('closed');

  let ul_four = unordered_list();

  let four_filter = filterFun(learners[3].mentors, mentors, 0);
  
  let li_four = li_elem(`${four_filter[0].firstName} ${four_filter[0].lastName}`);
  

  div_four.appendChild(h3_four);
  div_four.appendChild(divChild_four);
  div_four.appendChild(h4_four);
  div_four.appendChild(ul_four);
  ul_four.appendChild(li_four);
 
  //Fifth-card
  let div_five = divElement ("card");
  divParent.appendChild(div_five);

  let h3_five = header_3(`${learners[4].fullName}`);
  let divChild_five = divChild(`${learners[4].email}`);
  let h4_five = header_4('closed');

  let ul_five = unordered_list();

  let five_filter = filterFun(learners[4].mentors, mentors, 0);
  let five_two_filter = filterFun(learners[4].mentors, mentors, 1);
  let li_five = li_elem(`${five_filter[0].firstName} ${five_filter[0].lastName}`);
  let li_fivev2 = li_elem(`${five_two_filter[0].firstName} ${five_two_filter[0].lastName}`);



  div_five.appendChild(h3_five);
  div_five.appendChild(divChild_five);
  div_five.appendChild(h4_five);
  div_five.appendChild(ul_five);

  ul_five.appendChild(li_five);
  ul_five.appendChild(li_fivev2);
  //Sixth-card
  let div_six = divElement ("card");
  divParent.appendChild(div_six);

  let h3_six = header_3(`${learners[5].fullName}`);
  let divChild_six = divChild(`${learners[5].email}`);
  let h4_six = header_4('closed');

  let ul_six = unordered_list();

  let six_filter = filterFun(learners[5].mentors, mentors, 0);
  let six_two_filter = filterFun(learners[5].mentors, mentors, 1);
  let six_three_filter = filterFun(learners[5].mentors, mentors, 2)
  let li_six = li_elem(`${six_filter[0].firstName} ${six_filter[0].lastName}`);
  let li_sixv2 = li_elem(`${six_two_filter[0].firstName} ${six_two_filter[0].lastName}`);
  let li_sixv3 = li_elem(`${six_three_filter[0].firstName} ${six_three_filter[0].lastName}`);


  div_six.appendChild(h3_six);
  div_six.appendChild(divChild_six);
  div_six.appendChild(h4_six);
  div_six.appendChild(ul_six);

  ul_six.appendChild(li_six);
  ul_six.appendChild(li_sixv2);
  ul_six.appendChild(li_sixv3);
  //Seventh-card
  let div_seven = divElement ("card");
  divParent.appendChild(div_seven);

  let h3_seven = header_3(`${learners[6].fullName}`);
  let divChild_seven = divChild(`${learners[6].email}`);
  let h4_seven = header_4('closed');

  let ul_seven = unordered_list();

  let seven_filter = filterFun(learners[6].mentors, mentors, 0);
  let seven_two_filter = filterFun(learners[6].mentors, mentors, 1);
  let li_seven = li_elem(`${seven_filter[0].firstName} ${seven_filter[0].lastName}`);
  let li_sevenv2 = li_elem(`${seven_two_filter[0].firstName} ${seven_two_filter[0].lastName}`);


  div_seven.appendChild(h3_seven);
  div_seven.appendChild(divChild_seven);
  div_seven.appendChild(h4_seven);
  div_seven.appendChild(ul_seven);

  ul_seven.appendChild(li_seven);
  ul_seven.appendChild(li_sevenv2);

  //Eight-card
  let div_eight = divElement ("card");
  divParent.appendChild(div_eight);

  let h3_eight = header_3(`${learners[7].fullName}`);
  let divChild_eight = divChild(`${learners[7].email}`);
  let h4_eight = header_4('closed');

  let ul_eight = unordered_list();

  let eight_filter = filterFun(learners[7].mentors, mentors, 0);
 
  let li_eight = li_elem(`${eight_filter[0].firstName} ${eight_filter[0].lastName}`);
  div_eight.appendChild(h3_eight);
  div_eight.appendChild(divChild_eight);
  div_eight.appendChild(h4_eight);
  div_eight.appendChild(ul_eight);
  ul_eight.appendChild(li_eight);

  //Ninth-card
  let div_nine = divElement ("card");
  divParent.appendChild(div_nine);

  let h3_nine = header_3(`${learners[8].fullName}`);
  let divChild_nine = divChild(`${learners[8].email}`);
  let h4_nine = header_4('closed');

  let ul_nine = unordered_list();

  let nine_filter = filterFun(learners[8].mentors, mentors, 0);
  let nine_two_filter = filterFun(learners[8].mentors, mentors, 1);
  let nine_three_filter = filterFun(learners[8].mentors, mentors, 2);
  let nine_four_filter = filterFun(learners[8].mentors, mentors, 3);

  let li_nine = li_elem(`${nine_filter[0].firstName} ${nine_filter[0].lastName}`);
  let li_ninev2 = li_elem(`${nine_two_filter[0].firstName} ${nine_two_filter[0].lastName}`);
  let li_ninev3 = li_elem(`${nine_three_filter[0].firstName} ${nine_three_filter[0].lastName}`);
  let li_ninev4 = li_elem(`${nine_four_filter[0].firstName} ${nine_four_filter[0].lastName}`);

  div_nine.appendChild(h3_nine);
  div_nine.appendChild(divChild_nine);
  div_nine.appendChild(h4_nine);
  div_nine.appendChild(ul_nine);

  ul_nine.appendChild(li_nine)
  ul_nine.appendChild(li_ninev2)
  ul_nine.appendChild(li_ninev3)
  ul_nine.appendChild(li_ninev4)
  //Tenth-card
  let div_ten = divElement ("card");
  divParent.appendChild(div_ten);

  let h3_ten = header_3(`${learners[9].fullName}`);
  let divChild_ten = divChild(`${learners[9].email}`);
  let h4_ten = header_4('closed');
  let ul_ten = unordered_list();

  let ten_filter = filterFun(learners[9].mentors, mentors, 0);
  let li_ten = li_elem(`${ten_filter[0].firstName} ${ten_filter[0].lastName}`);

  div_ten.appendChild(h3_ten);
  div_ten.appendChild(divChild_ten);
  div_ten.appendChild(h4_ten);
  div_ten.appendChild(ul_ten);

  ul_ten.appendChild(li_ten);

  //Eleventh-card
  let div_eleven = divElement ("card");
  divParent.appendChild(div_eleven);

  let h3_eleven = header_3(`${learners[10].fullName}`);
  let divChild_eleven = divChild(`${learners[10].email}`);
  let h4_eleven = header_4('closed');
  let ul_eleven = unordered_list();

  let eleven_filter = filterFun(learners[10].mentors, mentors, 0);
  let eleven_two_filter = filterFun(learners[10].mentors, mentors, 1);
  let eleven_three_filter = filterFun(learners[10].mentors, mentors, 2);

  let li_eleven = li_elem(`${eleven_filter[0].firstName} ${eleven_filter[0].lastName}`);
  let li_elevenv2 = li_elem(`${eleven_two_filter[0].firstName} ${eleven_two_filter[0].lastName}`);
  let li_elevenv3 = li_elem(`${eleven_three_filter[0].firstName} ${eleven_three_filter[0].lastName}`);

  div_eleven.appendChild(h3_eleven);
  div_eleven.appendChild(divChild_eleven);
  div_eleven.appendChild(h4_eleven);
  div_eleven.appendChild(ul_eleven);

  ul_eleven.appendChild(li_eleven);
  ul_eleven.appendChild(li_elevenv2);
  ul_eleven.appendChild(li_elevenv3);

  //Twelve-card
  let div_twelve = divElement ("card");
  divParent.appendChild(div_twelve);

  let h3_twelve = header_3(`${learners[11].fullName}`);
  let divChild_twelve = divChild(`${learners[11].email}`);
  let h4_twelve = header_4('closed');
  let ul_twelve = unordered_list();

  let twelve_filter = filterFun(learners[11].mentors, mentors, 0);
  let twelve_two_filter = filterFun(learners[11].mentors, mentors, 1);
  
  let li_twelve = li_elem(`${twelve_filter[0].firstName} ${twelve_filter[0].lastName}`);
  let li_twelvev2 = li_elem(`${twelve_two_filter[0].firstName} ${twelve_two_filter[0].lastName}`);


  div_twelve.appendChild(h3_twelve);
  div_twelve.appendChild(divChild_twelve);
  div_twelve.appendChild(h4_twelve);
  div_twelve.appendChild(ul_twelve);

  ul_twelve.appendChild(li_twelve);
  ul_twelve.appendChild(li_twelvev2);
  //Thirdteenth-card
  let div_thirdteen = divElement ("card");
  divParent.appendChild(div_thirdteen);

  let h3_thirdteen = header_3(`${learners[12].fullName}`);
  let divChild_thirdteen = divChild(`${learners[12].email}`);
  let h4_thirdteen = header_4('closed');
  let ul_thirdteen = unordered_list();

  let thirdteen_filter = filterFun(learners[12].mentors, mentors, 0);
  let thirdteen_two_filter = filterFun(learners[12].mentors, mentors, 1);
  let thirdteen_three_filter = filterFun(learners[12].mentors, mentors, 2);

  let li_thirdteen = li_elem(`${thirdteen_filter[0].firstName} ${thirdteen_filter[0].lastName}`);
  let li_thirdteenv2 = li_elem(`${thirdteen_two_filter[0].firstName} ${thirdteen_two_filter[0].lastName}`);
  let li_thirdteenv3 = li_elem(`${thirdteen_three_filter[0].firstName} ${thirdteen_three_filter[0].lastName}`);


  div_thirdteen.appendChild(h3_thirdteen);
  div_thirdteen.appendChild(divChild_thirdteen);
  div_thirdteen.appendChild(h4_thirdteen);
  div_thirdteen.appendChild(ul_thirdteen);
  ul_thirdteen.appendChild(li_thirdteen);
  ul_thirdteen.appendChild(li_thirdteenv2);
  ul_thirdteen.appendChild(li_thirdteenv3);
  //Fourteenth-card
  let div_fourteen = divElement ("card");
  divParent.appendChild(div_fourteen);

  let h3_fourteen = header_3(`${learners[13].fullName}`);
  let divChild_fourteen = divChild(`${learners[13].email}`);
  let h4_fourteen = header_4('closed');
  let ul_fourteen = unordered_list();

  let fourteen_filter = filterFun(learners[13].mentors, mentors, 0);
  let fourteen_two_filter = filterFun(learners[13].mentors, mentors, 1);
  let fourteen_three_filter = filterFun(learners[13].mentors, mentors, 2);

  let li_fourteen = li_elem(`${fourteen_filter[0].firstName} ${fourteen_filter[0].lastName}`);
  let li_fourteenv2 = li_elem(`${fourteen_two_filter[0].firstName} ${fourteen_two_filter[0].lastName}`);
  let li_fourteenv3 = li_elem(`${fourteen_three_filter[0].firstName} ${fourteen_three_filter[0].lastName}`);



  div_fourteen.appendChild(h3_fourteen);
  div_fourteen.appendChild(divChild_fourteen);
  div_fourteen.appendChild(h4_fourteen);
  div_fourteen.appendChild(ul_fourteen);

  ul_fourteen.appendChild(li_fourteen);
  ul_fourteen.appendChild(li_fourteenv2);
  ul_fourteen.appendChild(li_fourteenv3);

  //Fifteenth-card
  let div_fifteen = divElement ("card");
  divParent.appendChild(div_fifteen);

  let h3_fifteen = header_3(`${learners[14].fullName}`);
  let divChild_fifteen = divChild(`${learners[14].email}`);
  let h4_fifteen = header_4('closed');
  let ul_fifteen = unordered_list();

  let fifteen_filter = filterFun(learners[14].mentors, mentors, 0);
  

  let li_fifteen = li_elem(`${fifteen_filter[0].firstName} ${fifteen_filter[0].lastName}`);
  



  div_fifteen.appendChild(h3_fifteen);
  div_fifteen.appendChild(divChild_fifteen);
  div_fifteen.appendChild(h4_fifteen);
  div_fifteen.appendChild(ul_fifteen);
  ul_fifteen.appendChild(li_fifteen);
  //Sixteenth-card
  let div_sixteen = divElement ("card");
  divParent.appendChild(div_sixteen);

  let h3_sixteen = header_3(`${learners[15].fullName}`);
  let divChild_sixteen = divChild(`${learners[15].email}`);
  let h4_sixteen = header_4('closed');
  let ul_sixteen = unordered_list();

  let sixteen_filter = filterFun(learners[15].mentors, mentors, 0);
  let sixteen_two_filter = filterFun(learners[15].mentors, mentors, 1);
  

  let li_sixteen = li_elem(`${sixteen_filter[0].firstName} ${sixteen_filter[0].lastName}`);
  let li_sixteenv2 = li_elem(`${sixteen_two_filter[0].firstName} ${sixteen_two_filter[0].lastName}`);


  div_sixteen.appendChild(h3_sixteen);
  div_sixteen.appendChild(divChild_sixteen);
  div_sixteen.appendChild(h4_sixteen);
  div_sixteen.appendChild(ul_sixteen);
  ul_sixteen.appendChild(li_sixteen);
  ul_sixteen.appendChild(li_sixteenv2);
  //Create Functionality to these components
  //Paragraph header needs to changed when page is completely loaded
  let pMain = document.querySelector('.info');
  function load (tag) {
    setTimeout(() => {
      tag.textContent = "No learner is selected";
    }, 0);
  }
  load (pMain)

  //If you click the div add the .selected class to the divs 
  const selectAllCards = document.querySelectorAll(".card");


  /* Add a way di-select the components and the h3 shows no selected div again!, when a component is clicked again the component should di-select automacally */
 
  
  const headers = document.querySelectorAll('h3');

  selectAllCards.forEach ((element) => {

    element.addEventListener("click", () => {

      selectAllCards.forEach (elem => elem.classList.remove("selected"));
      
      //element.classList.add("selected");
      
      
      if (element.classList.contains('selected')) {
        element.classList.remove('selected');
      } 
      else {
        element.classList.add("selected");
      }
      
      console.log(element.className.includes('selected'));

      

      
      const str = element.textContent.split(' ');
      const str2 = str[1].split(".");
      const str3 = str2[0].slice(0, -str[0].length);

      pMain.textContent = `The selected learner is ${str[0] + ' ' + str3}`;
      
      
     
    });
  });



  //The h4 dropdown toggle function
  let selectAllh4 = document.querySelectorAll(".closed");

  selectAllh4.forEach ((item) => {
    item.addEventListener("click", () => {
      if (item.className === "closed") {
        item.className = "open";
      } else {
        item.className = "closed";
      }
    })
  })


  
} catch(error){
    console.log(error);
  }

  

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
