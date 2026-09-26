function isPerfectSquare(n) {
    console.log("---->", Math.sqrt(n) * Math.sqrt(n));
    if(Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) == n){
        return true;
    }else{
        return false;
    }
  //return n;
}

console.log(isPerfectSquare(25281));