var Btn = document.getElementsByClassName("title")[0].getElementsByTagName("button");
var Tb = document.getElementsByClassName("tab")[0];
var n = document.getElementById("num");
var N=0;
Btn[0].onclick = function () {
    N++;
    n.innerHTML = N;
    var i = 0;
    var Tr = document.createElement("tr");
    Tr.className = "Ktr";
    Tb.appendChild(Tr);
    var Td1 = document.createElement("td");
    Tr.appendChild(Td1);
    Td1.className = "Ktd";
    Td1.innerHTML = N;
    var Td = new Array();
    var Ip = new Array();
    for (i = 0; i < 3; i++) {
        Td[i] = document.createElement("td");
        Tr.appendChild(Td[i]);
        Td[i].className = "Ktd";
        Ip[i] = document.createElement("input");
        Td[i].appendChild(Ip[i]);
        Ip[i].className = "Kip";
    }
    var Td3 = document.createElement("td");
    Tr.appendChild(Td3);
    Td3.className = "Ktd";
    var Sl = document.createElement("select");
    Td3.appendChild(Sl);
    Sl.className = "Ksl";
    Sl.add(new Option("YES", "1"));
    Sl.add(new Option("NO", "0"));
    Sl.add(new Option("???", "2"));
    
    var Td4 = document.createElement("td");
    Tr.appendChild(Td4);
    Td4.className = "Ktd";
    var Sl2 = document.createElement("select");
    Td4.appendChild(Sl2);
    Sl2.className = "Ksl";
    Sl2.add(new Option("YES", "1"));
    Sl2.add(new Option("NO", "0"));
    Sl2.add(new Option("MAYBE", "2"));
    Sl2.add(new Option("JUST SOSO", "3"));

    var Td2 = new Array();
    var Ip2 = new Array();
    for (i = 0; i < 3; i++) {
        Td2[i] = document.createElement("td");
        Tr.appendChild(Td2[i]);
        Td2[i].className = "Ktd";
        Ip2[i] = document.createElement("input");
        Td2[i].appendChild(Ip2[i]);
        Ip2[i].className = "Kip";
    }

    var Td5 = new Array();
    for (i = 0; i <= 3; i++) {
        Td5[i] = document.createElement("td");
        Td5[i].className = "Ktd";
        Tr.appendChild(Td5[i]);
        if (i == 3) {
            var Bt = document.createElement("button");
            Bt.className = "delete";
            Bt.innerText = "DELETE";
            Td5[i].appendChild(Bt);
            Bt.onclick = function () {
                Bt.parentNode.parentNode.parentNode.removeChild(Bt.parentNode.parentNode);
                var TR = document.getElementsByClassName("tab")[0].getElementsByTagName("tr");
                N = TR.length - 1;
                n.innerHTML = N;
                for (var j = 1; j < TR.length; j++) {
                    TR[j].firstElementChild.innerHTML = j;
                }
            }
        }
    }    
}
