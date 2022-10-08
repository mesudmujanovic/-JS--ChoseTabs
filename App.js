let tabs = document.querySelectorAll(".tabs-simple");

let contents = document.querySelectorAll(".tabs-content");

tabs.forEach( (tab,index)=>{
  tab.addEventListener('click',function(){
contents.forEach((content)=>{
 content.classList.remove('active');
});
tabs.forEach((el)=>{
 el.classList.remove("active");
})
contents[index].classList.add("active");
tabs[index].classList.add("active");
 })
})
