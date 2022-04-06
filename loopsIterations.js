// level 1

const pyramid =()=>{
    for(let i=1;i<=4;i=i+1){
      for(let j=0;j<4-i;j=j+1) {
    console.log(" ");
      }
      for(let k=1;k<=i;k=k+1){
    console.log(k);
      }
      for(let l=i-1;l>=1;l--){
          console.log(l);
            }
            console.log("\n");
    }
    }
