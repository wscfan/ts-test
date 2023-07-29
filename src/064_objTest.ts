const user = {
  name: "wscfan",
  age: 22,
  open: true,
  lesson: [{ title: "linux" }, { title: "TS" }],
};

user.age = 19;
user.open = false;
user.lesson.push({
  title: "css"
})
console.log(user.lesson[0].title)
