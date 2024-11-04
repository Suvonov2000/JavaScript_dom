var restoreButton = document.querySelector(".restoreData");

var data = [
  {
    id: 1,
    name: "Umidjon",
    surname: "Suvonov",
    age: "24",
  },
  {
    id: 2,
    name: "Asadbek",
    surname: "Abduvoitov",
    age: "19",
  },
  {
    id: 3,
    name: "Muhammad",
    surname: "Hamraev",
    age: "20",
  },
  {
    id: 4,
    name: "Husan",
    surname: "Bo'taev",
    age: "23",
  },
];

var tbodyElements = "";

const deleteUser = (id) => {
  console.log(id);
  data = data.filter((value) => {
    return value.id !== id;
  });
  tbodyElements = "";
  renderingData();
};

const renderingData = () => {
  if (data.length == 0) {
    restoreButton.style.display = "block";
  } else {
    restoreButton.style.display = "none";
  }
  data.map((value) => {
    tbodyElements += `
    <tr>
       <td>${value.id}</td>
       <td>${value.name}</td>
       <td>${value.surname}</td>
       <td>${value.age}</td>
       <td>
     <button onclick="deleteUser(${value.id})" >Delete</button>
    </td>
    </tr>

    `;
  });
  console.log(tbodyElements);
  document.querySelector("tbody").innerHTML = tbodyElements;
};

renderingData();

restoreButton.addEventListener("click", () => {
  data = [
    {
      id: 1,
      name: "Umidjon",
      surname: "Suvonov",
      age: "24",
    },
    {
      id: 2,
      name: "Asadbek",
      surname: "Abduvoitov",
      age: "19",
    },
    {
      id: 3,
      name: "Muhammad",
      surname: "Hamraev",
      age: "20",
    },
    {
      id: 4,
      name: "Husan",
      surname: "Bo'taev",
      age: "23",
    },
  ];

  renderingData();
});
