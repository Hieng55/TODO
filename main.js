let arrCourse = [];
let idItem;
let checkBoxArr = [];
function add() {
    if ($("input").value === "") {
        alert("Please enter todo");
    } else {
        arrCourse.push({ id: arrCourse.length + 1, course: $("input").value });
        localStorageItem("setItem", "COURSE", arrCourse);
        view();
        $("input").focus();
    }
}
function view() {
    console.log("1");
    updateValue();
    const courses = getLocalItem("getItem", "COURSE");
    courses ? toggleClass(".remove", "add", "active") : toggleClass(".remove", "remove", "active");
    if (courses) {
        arrCourse = courses;
        inner("#view", "");
        let courseHtml = courses.map((item) => {
            return `<li>
            <div class="left">
                    <p>${item.course} </p>
            </div>
            <div class="btn">
                    <button class="delete" type="button" onclick="removeItem(${item.id})">DELETE</button>
                    <button class="edit" type="button" onclick="editItem(${item.id})">EDIT</button>
            </div>
            </li>
                    
            `;
        });
        console.log(arrCourse);

        inner("#view", courseHtml.join(""));
    } else {
        arrCourse = [];
        inner("#view", "");
    }
    
}
function removeItem(id) {
    const filter = arrCourse.filter((item) => item.id !== id);
    if (filter.length === 0) {
        localStorage.removeItem("COURSE");
        updateValue();
    } else {
        localStorageItem("setItem", "COURSE", filter);
    }
    view();
}
function remove() {
    localStorage.removeItem("COURSE");
    updateValue();
    view();
}
function editItem(id) {
    const findItemId = arrCourse.find((item) => item.id === id);
    if (findItemId) {
        idItem = findItemId;
        $("input").value = findItemId.course;
        toggleClass(".add", "add", "active");
        toggleClass(".apply", "add", "active");
    }
}
function apply() {
    if ($("input").value === "") {
        alert("Please enter edit todo");
    } else {
        const indexItem = arrCourse.findIndex((item) => item.id === idItem.id);
        arrCourse[indexItem].course = $("input").value;
        localStorageItem("setItem", "COURSE", arrCourse);
        toggleClass(".apply", "remove", "active");
        toggleClass(".add", "remove", "active");
        view();
    }
}

view();
