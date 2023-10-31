const data = document.querySelectorAll(".data");
const display = document.querySelector(".display");
const btn_custom = document.querySelector(".btn_custom");
const data_array = [];
let checkEdit = true;

function submitting() {
  //Lay data tu nut submit
  btn_custom.innerHTML = `<button class="submit_b">Submit</button>`;
  const submit_b = document.querySelector(".submit_b");
  submit_b.addEventListener("click", () => {
    const data_user = []; //data tung nguoi
    data.forEach((Element) => {
      data_user.push(Element.value);
      Element.value = "";
    });
    data_array.push(data_user);
    //In data ra mh
    displaying();
  });
}

function displaying() {
  let display_main = "";
  data_array.forEach((Element) => {
    let display_user = "";
    Element.forEach((items) => {
      display_user += `<td>${items}</td>`;
    });
    display_user += `<td>
    <button class="Edit_b">Edit</button>
    <button class="Delete_b">Delete</button>
    </td>`;
    display_main += `<tr>${display_user}</tr>`;
  });

  display.innerHTML = `
    <tr>
      <th>FULL NAME</th>
      <th>GENDER</th>
      <th>DATE OF BIRTH</th>
      <th>PHONE NUMBER</th>
      <th>MAIL</th>
      <th>ADDRESS</th>
      <th>STATUS</th>
    </tr>${display_main}`;
  edit();
  Delete();
}

function edit() {
  const Edit_b = document.querySelectorAll(".Edit_b");
  Edit_b.forEach((Element, index) => {
    Element.addEventListener("click", () => {
      if (checkEdit) {
        Updating(index, false);
      }
    });
  });
}

function Delete() {
  const Delete_b = document.querySelectorAll(".Delete_b");
  Delete_b.forEach((Element, index) => {
    Element.addEventListener("click", () => {
      data_array.splice(index, 1);
      displaying();
    });
  });
}

function Updating(index, boolean) {
  let number = 0;
  data.forEach((Element) => {
    Element.value = data_array[index][number++];
  });
  checkEdit = boolean;

  btn_custom.innerHTML = `<button class="update_btn_custom">UPDATE</button>`;
  const button_update = document.querySelector(".update_btn_custom");
  button_update.addEventListener("click", () => {
    if (!checkEdit) {
      const new_data = [];
      data.forEach(function (Element) {
        new_data.push(Element.value);
      });
      data_array[index] = new_data;
      displaying();
      submitting();
      data.forEach((Element) => {
        Element.value = "";
      });
      checkEdit = true;
      
    }
  });
}

submitting();
