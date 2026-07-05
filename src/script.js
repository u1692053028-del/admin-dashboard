const data = [
{
id:"123456789012345678",
user:"Honza",
type:"Warn",
reason:"Spam",
mod:"Admin",
date:"05.07.2026"
},
{
id:"22222222222222222",
user:"Pepa",
type:"Ban",
reason:"Cheaty",
mod:"Owner",
date:"05.07.2026"
},
{
id:"333333333333333333",
user:"Karel",
type:"Mute",
reason:"Nadávky",
mod:"Mod",
date:"05.07.2026"
}
];

const tbody=document.getElementById("tbody");

function render(){

tbody.innerHTML="";

let warns=0;
let bans=0;
let kicks=0;
let mutes=0;

data.forEach(p=>{

if(p.type==="Warn")warns++;
if(p.type==="Ban")bans++;
if(p.type==="Kick")kicks++;
if(p.type==="Mute")mutes++;

tbody.innerHTML+=`
<tr>
<td>${p.id}</td>
<td>${p.user}</td>
<td class="${p.type.toLowerCase()}">${p.type}</td>
<td>${p.reason}</td>
<td>${p.mod}</td>
<td>${p.date}</td>
</tr>
`;

});

warnsEl.textContent=warns;
bansEl.textContent=bans;
mutesEl.textContent=mutes;
kicksEl.textContent=kicks;

}

const warnsEl=document.getElementById("warns");
const bansEl=document.getElementById("bans");
const mutesEl=document.getElementById("mutes");
const kicksEl=document.getElementById("kicks");

render();