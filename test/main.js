// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 0) return "";
    let common = strs[0];
    for(var i = 1;i< strs.length;i++){
        let j = 0;
        for(;j<common.length&&j<strs[i].length;j++){
            if(common[j] != strs[i][j])break;
        }
        common = common.substring(0,j);
        if(common === "") return "";
    }
    
    return common;
}


let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)) ;