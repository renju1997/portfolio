const txt="Assistant Professor • Computer Science • Research • Innovation";let i=0;setInterval(()=>{typing.textContent=txt.slice(0,i++% (txt.length+1));},80);
theme.onclick=()=>document.body.classList.toggle("dark");
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show"))).observe(document.querySelectorAll?document.querySelector(".reveal"):null);
document.querySelectorAll(".reveal").forEach(el=>new IntersectionObserver(x=>x.forEach(y=>y.isIntersecting&&y.target.classList.add("show"))).observe(el));