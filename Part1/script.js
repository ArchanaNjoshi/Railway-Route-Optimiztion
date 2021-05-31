const loginPage=document.querySelector('.section-login-page');
const searchPage=document.querySelector('.section-search-page');
const loginbtn=document.querySelector('.login-button');
const loginButton=document.querySelector('.login100-form-btn');
const resultPage=document.querySelector('.section-result-page');
const loginModal=document.querySelector('.login-modal')
const searchBtn=document.querySelector('.login100-form-btn-search');
const loginModalSearchPage=document.querySelector('.login-modal-search');

const resultSearchBtn=document.querySelector('.login100-form-btn-result-searchbtn')
const resultLogoutBtn=document.querySelector('.login100-form-btn-result-logoutbtn')
const removeModalLoginPage=document.querySelector('.login-modal');
const clearresult=document.querySelector(".row2Data2");
const cleartrainresult=document.querySelector('.row4Data5');
const removeModalResultPage=document.querySelector('.login-modal-search');


/* ------------------------------------------------------------- */
 const goToLoginPage=()=>{

    loginPage.style.display='flex';
    searchPage.style.display='none';
    resultPage.style.display='none';
    
}; 
 const goToSearchPage=()=>{

    loginPage.style.display='none';
    resultPage.style.display='none';
    searchPage.style.display='flex';
    
}; 
 const goToResultPage=()=>{

    loginPage.style.display='none';
    resultPage.style.display='flex';
    searchPage.style.display='none';
    
}; 


console.log('hrieieiei');

loginButton.addEventListener('click',()=>{
    const userEmail=document.getElementById('email');
    const userPassword=document.getElementById('password');

    if(userEmail.value !="" && userPassword.value !=""){
        goToSearchPage();
        

    }
    else{
       goToLoginPage();
       loginModal.style.display='flex';
      
    }
})



/* action after pressing of search in search page */

searchBtn.addEventListener('click',()=>{
    const userSource=document.getElementById('source');
    const userDestination=document.getElementById('destination');

    if(userSource.value !="" && userDestination.value !=""){
        searchPage.style.display='none'
        resultPage.style.display='flex';
    }
    else{
       goToSearchPage();
       loginModalSearchPage.style.display='flex';
    }
    /* converted to upper case */
    var source=userSource.value.toUpperCase();                                  
    var desti=userDestination.value.toUpperCase();
    var v=-1;
    var d=-1;  
   /* checking if source and destination is same */
    if(source===desti){
        goToSearchPage();
        loginModalSearchPage.style.display='flex';
    }

    /* assigning no to string station names */
/*     switch(source){
        
        case 'BENGALURU':v=0;break;
        case 'Patna':v=1;break;
        case 'Delhi':v=2;break;
        case 'jaipur':v=3;break;
        case 'manglore':v=4;break;

    }
    switch(desti){
        
        case 'BENGALURU':d=0;break;
        case 'Patna':d=1;break;
        case 'Delhi':d=2;break;
        case 'jaipur':d=3;break;
        case 'manglore':d=4;break;

    }
 */
    switch(source){
        
        case 'BENGALURU':v=0;break;
        case 'MUMBAI':v=1;break;
        case 'CHENNAI':v=2;break;
        case 'HYDERABAD':v=3;break;
        case 'DELHI':v=4;break;
        case 'JAIPUR':v=5;break;
        case 'GANDHINAGAR':v=6;break;
        case 'LUCKNOW':v=7;break;
        case 'PATNA':v=8;break;
        case 'CHANDIGARH':v=9;break;
        case 'BANGALORE':v=0;break;

    }
    switch(desti){
        
        case 'BENGALURU':d=0;break;
        case 'MUMBAI':d=1;break;
        case 'CHENNAI':d=2;break;
        case 'HYDERABAD':d=3;break;
        case 'DELHI':d=4;break;
        case 'JAIPUR':d=5;break;
        case 'GANDHINAGAR':d=6;break;
        case 'LUCKNOW':d=7;break;
        case 'PATNA':d=8;break;
        case 'CHANDIGARH':d=9;break;
        case 'BANGALORE':d=0;break;

    }




    function dijkstraw(n,v,mat=[],dist=[],parent=[]) {  
        var k,count=0,visited=[],min;
        for(var i=0;i<n;i++){
            parent[i]=-1;
            visited[i]=0;
            dist[i]=mat[v][i];
        }
        visited[v]=1;
        dist[v]=0;
        count=2;
        while(count<=n){
            min=9999;
            for(i=0;i<n;i++)
            {
                if(dist[i]<min&&!visited[i]){
                    min=dist[i]
                    k=i;
                }
            }
            visited[k]=1;
            count++;
            for(i=0;i<n;i++){
                if(!visited[i]){
                    if(dist[i]>dist[k]+mat[k][i]){
                        parent[i]=k;
                        console.log("in dijkstarw"+parent);
                        dist[i]=dist[k]+mat[k][i];
                    }
                }
            }
        }
    }

    function printPath(station=[],parent=[],j,tim=[],sum,d)
{
    if(parent[j]===-1)
    {return;}
    printPath(station,parent,parent[j],tim,sum,d);
    if(j!=d){
    var str=[],fullstr="",h=0;
     console.log("->"+station[j]);

      var row2via=document.querySelector('.row2Data2');
     row2via.innerHTML=station[j] 
 
    }

    sum=sum+tim[j][parent[j]];
    
}

function printTrain(det,parent,j){
    
    if(parent[j]===-1){
        return;
    }
    printTrain(det,parent,parent[j]);
    console.log("->"+det[j][0]+":"+det[j][1]);
    /* -------------------------------------------- */
    const dataViaTrain=document.querySelector('.row4Data5');
    dataViaTrain.innerHTML=det[j][0]+' : '+det[j][1]+" => ";
}


function printTrainwithoutvia(det,parent,j){
    
    if(parent[j]===-1){
        return;
    }
    printTrainwithoutvia(det,parent,parent[j]);
    console.log("->"+det[j][0]+":"+det[j][1]);
    /* -------------------------------------------- */
    const dataViaTrain=document.querySelector('.row4Data5');
    var stringcaat=dataViaTrain.textContent;
    dataViaTrain.innerHTML=stringcaat+" => "+det[j][0]+' : '+det[j][1];
}



/* //this main function */
var n=10,op=0,i,j,s,sum=0;
var dist=[],parent=[];
/* //distance matrix or weights of graph */
/* var distance=[
[9999,100,,150,120,70],
[100,9999,50,999,9999],
[150,50,9999,80,9999],
[120,9999,80,9999,200],
[70,9999,9999,200,9999]
]; */
var distance=[
             [9999,994,350,573,9999,9999,1511,1993,9999,9999],
             [988,9999,1345,716,1458,1208,557,1988,9999,1709],
             [351,1350,9999,752,9999,9999,1867,9999,9999,9999],
             [574,707,724,9999,9999,1427,1225,1404,1468,9999],
             [9999,1472,9999,9999,9999,266,929,532,1064,247],
             [9999,1213,9999,1891,252,9999,670,735,1322,510],
             [1506,557,1864,1235,911,664,9999,1445,1977,1165],
             [9999,1991,9999,1402,530,794,1448,9999,535,775],
             [9999,9999,9999,1479,1071,1335,1989,540,9999,1316],
             [9999,1713,9999,9999,246,516,1171,776,1311,9999]
            ];

/*  //time matrix or journey time between any two stations */
/* var tim=[
    [0,4,3,5,3],
    [4,0,2,0,0],
    [3,2,0,3,0],
    [5,0,3,0,8],
    [3,0,0,8,0]   */

var tim=[
          [0,15,5,7,33,31,22,29,30,38],
          [16,0,19,11,20,16,7,27,33,23],
          [4,20,0,10,39,36,27,29,34,42],
          [7,10,10,0,29,21,17,19,22,32],
          [34,20,39,31,0,3,12,6,13,3],
          [31,17,36,27,3,0,9,9,17,6],
          [22,7,26,18,12,9,0,18,26,15],
          [40,26,31,20,6,9,18,0,7,9],
          [38,34,34,23,14,17,26,8,0,17],
          [37,23,42,34,3,6,15,9,17,0]
        ];

var buffer='No Train Available';
/* 
//writing and displaying stations */
/* var station=["Bangalore","Patna","Delhi","Jaipur","Manglore"]; */
var station=["Banglore","Mumbai","Chennai",
             "Hyderabad","Delhi","Jaipur",
             "Gandhinagar","Lucknow","Patna",
             "Chandigarh"];

             
//this is clone of struct train details det[10] */
/* const object0={id:15218,name:"Patna Express"};
const object1={id:21538,name:"Delhi Express"};
const object2={id:38158,name:"Jaipur Express"};
const object3={id:38821,name:"manglore Express"};
const object4={id:21838,name:"unknown Express"}; */

const object0={id:15218,name:"Bangaluru Express"};
const object1={id:21538,name:"Chatrapati Shivagi Express"};
const object2={id:38158,name:"Coimbatore Express"};
const object3={id:38821,name:"Golkonda Express"};
const object4={id:21838,name:"Qutub Minar Express"};
const object5={id:15821,name:"Rajastani Express"};
const object6={id:38218,name:"Akshardham Express"};
const object7={id:81538,name:"Luknow Express"};
const object8={id:82138,name:"Golghar Express"};
const object9={id:15388,name:"Hariyani Express"};

/* const det=[
           [object0.id,object0.name],
           [object1.id,object1.name],
           [object2.id,object2.name],
           [object3.id,object3.name],
           [object4.id,object4.name]]; */

const det=[
           [object0.id,object0.name],
           [object1.id,object1.name],
           [object2.id,object2.name],
           [object3.id,object3.name],
           [object4.id,object4.name],
           [object5.id,object5.name],
           [object6.id,object6.name],
           [object7.id,object7.name],
           [object8.id,object8.name],
           [object9.id,object9.name],         
          ];

/* console.log("Enter the number corresponding to the station\nNUMBER\t STATION NAME\n");
for(i=0;i<n;i++){
    console.log(i+'\t'+station[i]); */

/* //continue searching from here
//repeat:  label skipped here */
if(v>n||d>n)
console.log('invalid input\n');
/* //finds shoetest distance */
else{
    dijkstraw(n,v,distance,dist,parent);
}
if(dist[d]<=9999){
    /* console.log('\n'+'from'+'\t'+station[v]+'\t'+'To'+'\t'+station[d]+'\n'); */
    console.log('\n**Travel Details**\n');
    console.log('\nSource: '+station[v]);
    /* ----------displays source in table---------- */
    var data1Sourceee=document.querySelector('.row2Data1');
    data1Sourceee.innerHTML=station[v];
    /* -------------------------------------------- */
    console.log('\nDestination: '+station[d]);
    /* ----------displays destination in table------- */
    var data3destina=document.querySelector('.row2Data3');
    data3destina.innerHTML=station[d];
    /* ---------------------------------------------- */
    console.log('\nDistance : '+dist[d]+'kms');
    /* ---------displays distance in table------- */
    var data5time=document.querySelector('.row2Data4');
    data5time.innerHTML=dist[d];
    /* ---------------------------------------------- */
    
    console.log('\nRoute: '+station[v]+'->');
    printPath(station,parent,d,tim,sum,d); 
    console.log('->'+station[d]);
    if(sum===0)
    {
        console.log('\nDuration of Journey:'+Math.floor(tim[v][d]/24)+' day/s '+tim[v][d]%24+' hours');
        var data6Time=document.querySelector(".row4Data6");
        data6Time.innerHTML=Math.floor(tim[v][d]/24)+' d : '+tim[v][d]%24+' h ';
    }
    else{
        console.log('\nDuration of Journey: '+Math.floor(sum/24)+'day/s'+sum%24+'hours');
        var data6Time=document.querySelector(".row4Data6");
        data6Time.innerHTML=Math.floor(tim[v][d]/24)+' d : '+tim[v][d]%24+' h ';
    }




    console.log('\n**Train Details**\n');
    console.log('\n Train number: '+"Train name");
    var yes=0;

    /* my code for clarity */
    if(v<d){
      for(var u=v;u<=d;u++){
          if(parent[u]!=-1)   
             yes=yes+1;
        }
    }
    else{
        for( var u=d;u<=v;u++){
             if(parent[u]!=-1)
                 yes=yes+1;
             }
      }

      
     if(v===0 && d===6){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38218 : Akshardham Express';
}


else if(v===1 && d===3){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38821 : Golkonda Express';
}
else if(v===1 && d===4){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21838 :  Qutub Minar Express';
}
else if(v===1 && d===5){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='15821 : Rajastani Express';
}
else if(v===1 && d===6){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38218 : Akshardham Express';
}


else if(v===3 && d===5){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='15821 : Rajastani Express';
}
else if(v===3 && d===6){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38218 : Akshardham Express';
}
else if(v===3 && d===7){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='81538 : Lucknow Express';
}
else if(v===3 && d===8){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='15388 : Hariyani Express';
}


else if(v===5 && d===1){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21538 : Chatrapati Shivaji Express';
}


else if(v===6 && d===0){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='15218 : Banglore Express';
}
else if(v===6 && d==1){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21538 : Chatrapati Shivaji Express';
}



else if(v===7 && d===1){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21538 : Chatrapati Shivaji Express';
}





else if(v===9 && d===1){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21538 : Chatrapati Shivaji Express';
}
else if(v===9 && d===4){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='21838 : Qutub Minar Express';
}
else if(v===9 && d===6){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38218 : Akshardham Express';
}
else if(v===9 && d===7){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='81538 : Lucknow Express';
}




else if(v===8 && d===3){
    const trainresult=document.querySelector('.row4Data5');
    trainresult.innerHTML='38821 : Golkonda Express';
} 

else{



    
  if(yes>0)
 {
        printTrain(det,parent,parent[d]);

    console.log("\n"+det[d][0]+" : "+det[d][1]);
    console.log("\n\n\n\n"+parent);

    var data5viaTrain=document.querySelector('.row4Data5');
    var stringcaat=data5viaTrain.textContent;
    data5viaTrain.innerHTML=stringcaat+det[d][0]+" : "+det[d][1];
 }
 else{
    var data5viaTrain=document.querySelector('.row4Data5');
    data5viaTrain.innerHTML=det[d][0]+" : "+det[d][1];
    printTrainwithoutvia(det,parent,parent[d]);

 }
    
    
    console.log('\n\t\t\t\t***End***\n'); 
}

}

    

})

/* end of search button event listner */






resultSearchBtn.addEventListener('click',()=>{

    goToSearchPage();
    clearresult.innerHTML='---';
    cleartrainresult.innerHTML='---';


    
})
resultLogoutBtn.addEventListener('click',()=>{
    
    goToLoginPage();
    location.reload();
   

})
removeModalLoginPage.addEventListener('click',()=>{
    loginModal.style.display='none';
})
removeModalResultPage.addEventListener('click',()=>{
    loginModalSearchPage.style.display='none';
})





