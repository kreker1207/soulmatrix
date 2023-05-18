const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const birthday = urlParams.get("birthday");
const name = urlParams.get("name");

console.log("Birthday:", birthday);
console.log("Name:", name);
if (name) {
    document.getElementById("name").innerHTML = name; 
}
const date = new Date(birthday);

const year = date.getFullYear();
const month = date.getMonth() + 1; 
const day = date.getDate();

console.log(year); 
console.log(month); 
console.log(day);  

function addDigits(number) {
    const digits = number.toString().split('');
    const sum = digits.reduce((accumulator, current) => accumulator + parseInt(current), 0);
    if (sum>=23){
       return addDigits(sum)
    }
    return sum;
  }
function checkG(num){
    if(num>=23){
       return addDigits(num)
    }
    else
    return num
}
function generateInputs(name, a, b, c) {
    for (let n = 1; n <= 3; n++) {
      document.getElementById(`${name}-${n.toString()}`).innerHTML = n === 1 ? a : n === 2 ? b : c;
    }
  }

const daySoul = checkG(day)
const monthSoul = checkG(month)
const yearSoul = checkG(year)
const g = checkG(daySoul+monthSoul+yearSoul)
const d = checkG(daySoul+monthSoul+yearSoul+g)
const e = checkG(daySoul+monthSoul)
const zh = checkG(monthSoul+yearSoul);
const i = checkG(yearSoul+g)
const z = checkG(daySoul+g)
const k = checkG(d+g)
const l = checkG(d+yearSoul)
const m = checkG(k+l)
const n = checkG(k+m)
const o = checkG(l+m)

////
const a1 = checkG(daySoul+d)
const a2 = checkG(daySoul+a1)

const b1 = checkG(monthSoul+d)
const b2 = checkG(monthSoul+b1)

const v1 = checkG(yearSoul+d)
const v2 = checkG(yearSoul+v1)

const g1 = checkG(g+d)
const g2 = checkG(g+g1)

const sl = checkG(e+zh+i+z)

const e1 = checkG(e+sl)
const e2 = checkG(e+e1)

const zh1 = checkG(zh+sl)
const zh2 = checkG(zh+zh1)

const z1 = checkG(z+sl)
const z2 = checkG(z+z1)

const i1 = checkG(i+sl)
const i2 = checkG(i+i1)

const zelen1 = checkG(d+a1);
const zelen2 = checkG(d+b1);

const nebo = checkG(monthSoul+g);
const zemlia = checkG(daySoul+yearSoul)
const male = checkG(e+i)
const female = checkG(z+zh)

const lastOne = checkG(daySoul+a2+a1+d+yearSoul+zelen1+l);
const lastTwo = checkG(monthSoul+b2+b1+zelen2+d+k+g);
const lastThree =checkG(checkG(daySoul+monthSoul)+checkG(a2+b2)+
checkG(a1+b1)+checkG(zelen1+zelen2)+checkG(d+d)+checkG(l+k)+checkG(yearSoul+g));

  generateInputs("purp", daySoul,monthSoul, checkG(daySoul+monthSoul));
  generateInputs("blue", a2,b2, checkG(a2+b2));
  generateInputs("cyan", a1,b1, checkG(a1+b1));
  generateInputs("green",zelen1,zelen2,checkG(zelen1+zelen2))
  generateInputs("yellow",d,d,checkG(d+d))
  generateInputs("orange",l,k,checkG(l+k))
  generateInputs("red",yearSoul,g,checkG(yearSoul+g))
  generateInputs("total",lastOne,lastTwo,lastThree)

  document.getElementById("point-01").innerHTML = daySoul
  document.getElementById("point-02").innerHTML = monthSoul
  document.getElementById("point-03").innerHTML = yearSoul
  document.getElementById("point-04").innerHTML = g
  document.getElementById("point-05").innerHTML = d
  document.getElementById("point-06").innerHTML = e
  document.getElementById("point-07").innerHTML = zh
  document.getElementById("point-08").innerHTML = i
  document.getElementById("point-09").innerHTML = z
  document.getElementById("point-10").innerHTML = k
  document.getElementById("point-11").innerHTML = l
  document.getElementById("point-12").innerHTML = m
  document.getElementById("point-13").innerHTML = n
  document.getElementById("point-14").innerHTML = o
  document.getElementById("point-15").innerHTML = a1
  document.getElementById("point-16").innerHTML = b1
  document.getElementById("point-17").innerHTML = a2
  document.getElementById("point-18").innerHTML = b2
  document.getElementById("point-19").innerHTML = g2
  document.getElementById("point-20").innerHTML = v2
  document.getElementById("point-21").innerHTML = zelen1
  document.getElementById("point-22").innerHTML = zelen2
  document.getElementById("point-23").innerHTML = e1
  document.getElementById("point-24").innerHTML = e2
  document.getElementById("point-25").innerHTML = zh1
  document.getElementById("point-26").innerHTML = zh2
  document.getElementById("point-27").innerHTML = i1
  document.getElementById("point-28").innerHTML = i2
  document.getElementById("point-29").innerHTML = z1
  document.getElementById("point-30").innerHTML = z2
/////////////////////////////////

document.getElementById("nebo1").innerHTML = checkG(nebo)
document.getElementById("zemlia1").innerHTML = checkG(zemlia)
document.getElementById("for_self1").innerHTML = checkG(zemlia+nebo)

document.getElementById("male1").innerHTML = checkG(male)
document.getElementById("female1").innerHTML = checkG(female)
document.getElementById("socium1").innerHTML = checkG(male+female)

document.getElementById("duhovnoe1").innerHTML = checkG(checkG(zemlia+nebo)+checkG(male+female))
console.log(zemlia+nebo+male+female+male+female)
document.getElementById("planetarnoe1").innerHTML = checkG(checkG(checkG(zemlia+nebo)+checkG(male+female))+checkG(male+female))

const mid1 = checkG(daySoul+e)
const leftMid1 = checkG(daySoul+mid1)
const rightMid1 = checkG(e+mid1)

const mid2 = checkG(e+monthSoul)
const leftMid2 = checkG(e+mid2)
const rightMid2 = checkG(monthSoul+mid2)

const mid3 = checkG(monthSoul+zh)
const leftMid3 = checkG(monthSoul+mid3)
const rightMid3 = checkG(zh+mid3)

const mid4 = checkG(zh+ yearSoul)
const leftMid4 = checkG(zh+mid4)
const rightMid4 = checkG(yearSoul+mid4)

const mid5 = checkG(yearSoul+i )
const leftMid5 = checkG(yearSoul+mid5)
const rightMid5 = checkG(i+mid5)

const mid6 = checkG(i + g)
const leftMid6 = checkG(i+mid6)
const rightMid6 = checkG(g+mid6)

const mid7 = checkG(g+z )
const leftMid7 = checkG(g+mid7)
const rightMid7 = checkG(z+mid7)

const mid8 = checkG(z+ daySoul )
const leftMid8 = checkG(z+mid8)
const rightMid8 = checkG(daySoul+mid8)

document.getElementById("point-31").innerHTML = checkG(daySoul + leftMid1);
document.getElementById("point-32").innerHTML = checkG(leftMid1);
document.getElementById("point-33").innerHTML = checkG(leftMid1 + mid1);
document.getElementById("point-34").innerHTML = checkG(mid1);
document.getElementById("point-35").innerHTML = checkG(mid1 + rightMid1);
document.getElementById("point-36").innerHTML = checkG(rightMid1);
document.getElementById("point-37").innerHTML = checkG(rightMid1 + e);
document.getElementById("point-38").innerHTML = checkG(e + leftMid2);
document.getElementById("point-39").innerHTML = checkG(leftMid2);
document.getElementById("point-40").innerHTML = checkG(leftMid2 + mid2);
document.getElementById("point-41").innerHTML = checkG(mid2);
document.getElementById("point-42").innerHTML = checkG(mid2 + rightMid2);
document.getElementById("point-43").innerHTML = checkG(rightMid2);
document.getElementById("point-44").innerHTML = checkG(rightMid2 + monthSoul);
document.getElementById("point-45").innerHTML = checkG(monthSoul + leftMid3);
document.getElementById("point-46").innerHTML = checkG(leftMid3);
document.getElementById("point-47").innerHTML = checkG(leftMid3 + mid3);
document.getElementById("point-48").innerHTML = checkG(mid3);
document.getElementById("point-49").innerHTML = checkG(mid3 + rightMid3);
document.getElementById("point-51").innerHTML = checkG(rightMid3);
document.getElementById("point-52").innerHTML = checkG(rightMid3 + zh);
document.getElementById("point-53").innerHTML = checkG(zh + leftMid4);
document.getElementById("point-54").innerHTML = checkG(leftMid4);
document.getElementById("point-55").innerHTML = checkG(leftMid4 + mid4);
document.getElementById("point-56").innerHTML = checkG(mid4);
document.getElementById("point-57").innerHTML = checkG(mid4 + rightMid4);
document.getElementById("point-58").innerHTML = checkG(rightMid4);
document.getElementById("point-59").innerHTML = checkG(rightMid4 + yearSoul);
document.getElementById("point-60").innerHTML = checkG(yearSoul + leftMid5);
document.getElementById("point-61").innerHTML = checkG(leftMid5);
document.getElementById("point-62").innerHTML = checkG(leftMid5 + mid5);
document.getElementById("point-63").innerHTML = checkG(mid5);
document.getElementById("point-64").innerHTML = checkG(mid5 + rightMid5);
document.getElementById("point-65").innerHTML = checkG(rightMid5);
document.getElementById("point-66").innerHTML = checkG(rightMid5 + i);
document.getElementById("point-67").innerHTML = checkG(i + leftMid6);
document.getElementById("point-68").innerHTML = checkG(leftMid6);
document.getElementById("point-69").innerHTML = checkG(leftMid6 + mid6);
document.getElementById("point-70").innerHTML = checkG(mid6);
document.getElementById("point-71").innerHTML = checkG(mid6 + rightMid6);
document.getElementById("point-72").innerHTML = checkG(rightMid6);
document.getElementById("point-73").innerHTML = checkG(rightMid6 + g);
document.getElementById("point-74").innerHTML = checkG(g + leftMid7);
document.getElementById("point-75").innerHTML = checkG(leftMid7);
document.getElementById("point-76").innerHTML = checkG(leftMid7 + mid7);
document.getElementById("point-77").innerHTML = checkG(mid7);
document.getElementById("point-78").innerHTML = checkG(mid7 + rightMid7);
document.getElementById("point-79").innerHTML = checkG(rightMid7);
document.getElementById("point-80").innerHTML = checkG(rightMid7 + z);
document.getElementById("point-81").innerHTML = checkG(z + leftMid8);
document.getElementById("point-82").innerHTML = checkG(leftMid8);
document.getElementById("point-83").innerHTML = checkG(leftMid8 + mid8);
document.getElementById("point-84").innerHTML = checkG(mid8);
document.getElementById("point-85").innerHTML = checkG(mid8 + rightMid8);
document.getElementById("point-86").innerHTML = checkG(rightMid8);
document.getElementById("point-87").innerHTML = checkG(rightMid8 + daySoul);
document.getElementById("point-88").innerHTML = checkG(daySoul + leftMid1);
