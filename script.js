document.getElementById("name").textContent="Sapna Chaudhary";
        document.getElementById("uniroll").textContent="201520018";
        document.getElementById("college").textContent="GLA University, Mathura";
        window.onload=date;
        function date(){
            var d=new Date().toLocaleDateString();
            var l=d.split("/");
            var day=l[1] ,month=l[0],year=l[2];
            var date=day+"-"+month+"-"+year;
        document.getElementById("date").textContent=`${date}`;
        }
