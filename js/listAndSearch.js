let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const users = [
  {
    profileUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Adya Jha",
    email: "adya.jha@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "aditya Kumar",
    email: "aditya.kumar@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Singh",
    email: "dudu.singh@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Rohan Sharma",
    email: "rohan.sharma@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Neha Verma",
    email: "neha.verma@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Saurabh Patel",
    email: "saurabh.patel@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Anjali Gupta",
    email: "anjali.gupta@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Vivek Mishra",
    email: "vivek.mishra@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Ritika Yadav",
    email: "ritika.yadav@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Abhishek Ranjan",
    email: "abhishek.ranjan@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Shreya Sinha",
    email: "shreya.sinha@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Nikhil Tiwari",
    email: "nikhil.tiwari@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Kavya Pandey",
    email: "kavya.pandey@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Rahul Joshi",
    email: "rahul.joshi@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Isha Kumari",
    email: "isha.kumari@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Deepak Singh",
    email: "deepak.singh@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Aditi Roy",
    email: "aditi.roy@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Manish Chauhan",
    email: "manish.chauhan@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Pooja Mehta",
    email: "pooja.mehta@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Ankit Yadav",
    email: "ankit.yadav@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Sneha Rani",
    email: "sneha.rani@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Harsh Vardhan",
    email: "harsh.vardhan@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Megha Chauhan",
    email: "megha.chauhan@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Karan Thakur",
    email: "karan.thakur@gmail.com",
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Divya Bansal",
    email: "divya.bansal@gmail.com",
  },
];


function renderUsers(arr){
  userContainer.innerHTML = '';

  arr.map(function (obj) {

  let {profileUrl, name, email} = obj;
  
  let divElement = document.createElement("div");
  divElement.className = "userItem";
  divElement.innerHTML = `  
          <div class="image">
            <img
            src=${profileUrl}
            alt="error loading image"
          />
          </div>
          <div class="userDetails">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>  
    `

    userContainer.append(divElement)
});
}

renderUsers(users);

function handleSearch(e){
  let searchValue = e.target.value;
  let filteredUsers = users.filter(obj => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
  renderUsers(filteredUsers);
}

searchInput.addEventListener('input', handleSearch);





