var glb_previousCell={};function CreateCalendar(e,t,l){var r,a,n,o=e,d=t,g="<td style='background:whitesmoke;color:red'>",i=new Array(7);i[0]=new Array(1),i[1]=new Array(1),i[2]=new Array(7),i[3]=new Array(7),i[4]=new Array(7),i[5]=new Array(7),i[6]=new Array(7),r="";var h="<label>"+o+"</label>";h=(h=h+"<label>"+d+"</label>")+"<label>"+l+"</label>";n=new Date(d,o,0).getDate();var u,s="<tr style='display:none'><th colspan=7>"+h+"</th></tr>";s=s+"<tr><th colspan=7 style='text-align:center'>"+new Date(d,o,0).toLocaleString("en-us",{month:"long"})+" "+d+"</th></tr>",i[0][0]=s,i[1]=["<tr><th style='background:whitesmoke;color:red'>Su</th>","<th>Mo</th>","<th>Tu</th>","<th>We</th>","<th>Th</th>","<th>Fr</th>","<th style='background:whitesmoke;color:red'>Sa</th></tr>"];var b=2,y=new Date((new Date).getMonth()+1+"/"+(new Date).getDate()+"/"+(new Date).getFullYear());for(u=1;u<=n;u++)a=new Date(o+"/"+u+"/"+d),b>=i.length&&(i[b]=new Array(7)),0==a.getDay()?y.getMonth()==a.getMonth()&&y.getDate()==a.getDate()&&y.getFullYear()==a.getFullYear()?i[b][a.getDay()]="<td style='font-weight:bold;background:maroon;color:white;border:3px solid yellow'>"+u+"</td>":i[b][a.getDay()]=g+u+"</td>":6==a.getDay()?(y.getMonth()==a.getMonth()&&y.getDate()==a.getDate()&&y.getFullYear()==a.getFullYear()?i[b][a.getDay()]="<td style='font-weight:bold;background:maroon;color:white;border:3px solid yellow'>"+u+"</td></tr>":i[b][a.getDay()]=g+u+"</tr>",b++):y.getMonth()==a.getMonth()&&y.getDate()==a.getDate()&&y.getFullYear()==a.getFullYear()?i[b][a.getDay()]="<td style='font-weight:bold;background:maroon;color:white;border:3px solid yellow'>"+u+"</td>":i[b][a.getDay()]="<td>"+u+"</td>";r="<table border='1px' style='border:1px solid silver;border-collapse:collapse;background:white;color:black;' onclick='CalendarOnClick(event)'>";for(var c=0;c<i.length;c++)for(var w=0;w<i[c].length;w++)null==i[c][w]&&(i[c][w]=0==w||6==w?g+"&nbsp;</td>":"<td>&nbsp;</td>"),r+=i[c][w];return r+="</table>"}function CalendarOnClick(e){var t,l=e.target,r=l.parentNode.parentNode,a=r.getElementsByTagName("label")[0].innerText,n=parseFloat(l.innerText.trim()),o=r.getElementsByTagName("label")[1].innerText;t=r.getElementsByTagName("label")[2].innerText.trim();var d=document.getElementById(t);if(!isNaN(n))if(l_date=a+"/"+n+"/"+o,l.style.background="silver",null!=glb_previousCell&&(glb_previousCell.style.background="white"),glb_previousCell=l,d.hasAttribute("value"))d.value=l_date;else if(d.hasAttribute("value"))d.value=l_date;else if("undefined"!=d){if("undefined"!=d.innerText)return void(d.innerText=l_date);if("undefined"!=d.innerHTML)return void(d.innerHTML=l_date);if(d.hasAttribute("text"))return void(d.text=l_date)}}glb_previousCell=null;