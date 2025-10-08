
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function(nums) {
    let unique = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[unique]){
            unique ++;
            nums[unique] = nums[i];
        }
    }
    return(unique + 1);
};

k = removeDuplicates(nums);
console.log(k);
console.log(nums);