        Tab =[0,0,0,0,0,0,0,0,0]
		comp =1;
		
		function choix(j){
        choice=0;
        if (j==1) {choice=1;
        	document.getElementById("choicex").style.visibility="hidden";
        	document.getElementById("choiceo").style.visibility="hidden";
            document.getElementById("p").style.visibility="hidden";
        	document.getElementById("table").style.visibility="visible";
        }
        else if(j==2){
        	choice=2;
            document.getElementById("choicex").style.visibility="hidden";
        	document.getElementById("choiceo").style.visibility="hidden";
        	document.getElementById("p").style.visibility="hidden";
        	document.getElementById("table").style.visibility="visible";
        }
		}


		function turn(){//to determen who's turn it is
         if (choice==1) {
         if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
         	document.getElementById("oturn").style.visibility="visible";
         	document.getElementById("xturn").style.visibility="hidden";
         	comp++;
         }
         else if (comp==2 || comp==4 || comp==6 || comp==8){
         	document.getElementById("xturn").style.visibility="visible";
         	document.getElementById("oturn").style.visibility="hidden";
         	comp++;
         }
		}
        else if(choice==2){
        	if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
         	document.getElementById("xturn").style.visibility="visible";
         	document.getElementById("oturn").style.visibility="hidden";
         	comp++;
         }
         else if (comp==2 || comp==4 || comp==6 || comp==8){
         	document.getElementById("oturn").style.visibility="visible";
         	document.getElementById("xturn").style.visibility="hidden";
         	comp++;
         }
        }
	}

		function inp(x) {//to show the x's and o's
			if (choice==1) {
			if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
			   Tab[x]=1;
			   var ch=x+"x";
			   document.getElementById(ch).style.visibility="visible";
			   var ch1="t"+x
			   document.getElementById(ch1).disabled="true";
			}
			else if (comp==2 || comp==4 || comp==6 || comp==8){
				Tab[x]=2;
			   var ch=x+"o";
			   document.getElementById(ch).style.visibility="visible";
			}
		    }
            else if(choice==2){
                 if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
			   Tab[x]=2;
			   var ch=x+"o";
			   document.getElementById(ch).style.visibility="visible";
			}
			else if (comp==2 || comp==4 || comp==6 || comp==8){
				Tab[x]=1;
			   var ch=x+"x";
			   document.getElementById(ch).style.visibility="visible";
            }  }}

		function test(i){ //the validation of winning
			verif=0;
			if(i==0 || i==3 || i==6){//first condition
				if(Tab[i]==Tab[i+1]&&Tab[i]==Tab[i+2]){
			    verif=1;
				var ch="t"+i;
				var ch1="t"+(i+1);
				var ch2="t"+(i+2);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
				}
			}
			if(i==0 || i==1 || i==2){//2nd condition
				if(Tab[i]==Tab[i+3]&&Tab[i]==Tab[i+6]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i+3);
				var ch2="t"+(i+6);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==0){//3rd condition
				if(Tab[i]==Tab[i+4]&&Tab[i]==Tab[i+8]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i+4);
				var ch2="t"+(i+8);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==1 || i==4 || i==7){//4th condition
				if(Tab[i]==Tab[i-1]&&Tab[i]==Tab[i+1]){
					verif=1;
                var ch="t"+i;
				var ch1="t"+(i-1);
				var ch2="t"+(i+1);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
				}
			}
			if(i==2 || i==5 || i==8){//5th condition
				if(Tab[i]==Tab[i-1]&&Tab[i]==Tab[i-2]){
					verif=1;
					var ch="t"+i;
				var ch1="t"+(i-1);
				var ch2="t"+(i-2);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
				}
			}
			if(i==2 ){//6th condition
				if(Tab[i]==Tab[i+4]&&Tab[i]==Tab[i+2]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i+4);
				var ch2="t"+(i+2);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==4 || i==3 || i==5){//7th condition
				if(Tab[i]==Tab[i-3]&&Tab[i]==Tab[i+3]){
					verif=1;
				    var ch="t"+i;
				var ch1="t"+(i-3);
				var ch2="t"+(i+3);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==4){//8th&&9th condition
				if(Tab[i]==Tab[i-4]&&Tab[i]==Tab[i+4]){
					verif=1;
					var ch="t"+i;
				var ch1="t"+(i-4);
				var ch2="t"+(i+4);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
				}
				if(Tab[i]==Tab[i-2]&&Tab[i]==Tab[i+2]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i-2);
				var ch2="t"+(i+2);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==8 || i==7 || i==6){//10th condition
				if(Tab[i]==Tab[i-3]&&Tab[i]==Tab[i-6]){
					verif=1;
					var ch="t"+i;
				var ch1="t"+(i-3);
				var ch2="t"+(i-6);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
				}
			}
			if(i==6){//11th condition
				if(Tab[i]==Tab[i-2]&&Tab[i]==Tab[i-4]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i-2);
				var ch2="t"+(i-4);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
			if(i==8){//12th condition
				if(Tab[i]==Tab[i-4]&&Tab[i]==Tab[i-8]){
					verif=1;
				var ch="t"+i;
				var ch1="t"+(i-4);
				var ch2="t"+(i-8);
				document.getElementById(ch).style.borderColor="green";
				document.getElementById(ch1).style.borderColor="green";
				document.getElementById(ch2).style.borderColor="green";
			}
			}
		}
		function result(){
			if(verif==1){
			if(choice==1){
			if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
			   document.getElementById("owon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
			}
			else if (comp==2 || comp==4 || comp==6 || comp==8){
			   document.getElementById("xwon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
			}
			if( comp==10){
			   document.getElementById("xwon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
		    }
		    }

        if(choice==2){
			if (comp==1 || comp==3 || comp==5 || comp==7 || comp==9){
			   document.getElementById("xwon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
			}
			else if (comp==2 || comp==4 || comp==6 || comp==8){
			   document.getElementById("owon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
			}
			if( comp==10){
			   document.getElementById("owon").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
		}
		}}

	    
		if(verif==0 && comp==10){
			   document.getElementById("draw").style.visibility="visible";
			   document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("restart").style.visibility="visible";
         	for(i=0;i<9;i++){
         		var ch="t"+i;
         		document.getElementById(ch).style.borderColor="blue";
         	}}
	        }
	        function Restart(){
	        	Tab =[0,0,0,0,0,0,0,0,0];
		        comp =1;
		        choice=0;
	                 	for(i=0;i<9;i++){
         		var ch="t"+i;
         		document.getElementById(ch).style.borderColor="white";
         		var ch=i+"o";
			   document.getElementById(ch).style.visibility="hidden";
			   var ch1=i+"x";
			   document.getElementById(ch1).style.visibility="hidden";
         	}
         	document.getElementById("owon").style.visibility="hidden";
			document.getElementById("oturn").style.visibility="hidden";
         	document.getElementById("xturn").style.visibility="hidden";
         	document.getElementById("xwon").style.visibility="hidden";
         	document.getElementById("choicex").style.visibility="visible";
        	document.getElementById("choiceo").style.visibility="visible";
            document.getElementById("p").style.visibility="visible";
        	document.getElementById("table").style.visibility="hidden";
        	document.getElementById("restart").style.visibility="hidden";
	        }
