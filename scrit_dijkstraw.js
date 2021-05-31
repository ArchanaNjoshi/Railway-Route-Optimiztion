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
    
     console.log("->"+station[j]);
    
    }
    sum=sum+tim[j][parent[j]];
    
}
function printTrain(det,parent,j){
    if(parent[j]===-1){
        return;
    }
    printTrain(det,parent,parent[j]);
    console.log("->"+det[j][0]+":"+det[j][1]);
}



/* //this main function */
var n=10,op=0,i,j,s,sum=0;
var dist=[],parent=[];
/* //distance matrix or weights of graph */
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
var station=["Banglore","Mumbai","Chennai",
             "Hyderabad","Delhi","Jaipur",
             "Gandhinagar","Lucknow","Patna",
             "Chandigarh"];

             
//this is clone of struct train details det[10] */
const object0={id:15218,name:"Bangaluru Express"};
const object1={id:21538,name:"Chatrapati Shivagi Express"};
const object2={id:38158,name:"Coimbatore Express"};
const object3={id:38821,name:"Golkonda Express"};
const object4={id:21838,name:"Qutub Minar Express"};
const object5={id:15821,name:"Rajastani Express"};
const object6={id:38218,name:"Akshardham Express"};
const object7={id:81538,name:"Luknow Express"};
const object8={id:82138,name:"Golghar Express"};
const object9={id:15388,name:"Hariyana Express"};

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

console.log("Enter the number corresponding to the station\nNUMBER\t STATION NAME\n");
for(i=0;i<n;i++){
    console.log(i+'\t'+station[i]);
}
/* //continue searching from here
//repeat:  label skipped here */
console.log('source value taken is: '+0 );
var v=2;
var d=3;
console.log('destination value taken is: '+4);
if(v>n||d>n)
console.log('invalid input\n');
/* //finds shoetest distance */
else{
    dijkstraw(n,v,distance,dist,parent);
}
if(dist[d]<=9999){
    console.log('\n'+'from'+'\t'+station[v]+'\t'+'To'+'\t'+station[d]+'\n');
    console.log('\n**Travel Details**\n');
    console.log('\nSource: '+station[v]);
    console.log('\nDestination: '+station[d]);
    console.log('\nDistance : '+dist[d]);
    /* console.log('\nRoute: '+station[v]); */
    
    
    console.log('\nRoute: '+station[v]+'->');
    printPath(station,parent,d,tim,sum,d);
    console.log('->'+station[d]);
    if(sum===0)
    {
        console.log('\nDuration of Journey:'+Math.floor(tim[v][d]/24)+' day/s '+tim[v][d]%24+' hours');
    }
    else{
        console.log('\nDuration of Journey: '+Math.floor(sum/24)+'day/s'+sum%24+'hours');
    }
    console.log('\n**Train Details**\n');
    console.log('\n Train number: '+"Train name");
    console.log("\n"+det[v][0]+":"+det[v][1]);
    printTrain(det,parent,parent[d]);
    console.log('\n\t\t\t\t***End***\n'); 
}