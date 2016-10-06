//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function Octocat(n,a){
  this.name = n;
  this.arms = a;
  this.slap = function(){
    for(var i=0; i<this.arms.length; i++){
      console.log("SLAP!");
    }
  };
}
var phil = new Octocat("Phil", 9);
var erik = new Octocat("Erik", 8);
var me = new Octocat("Bill", 13);









//Write your 3 new octocat objects below here.
