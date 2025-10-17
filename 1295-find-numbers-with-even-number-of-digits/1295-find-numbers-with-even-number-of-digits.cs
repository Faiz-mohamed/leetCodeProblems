public class Solution {
    public int FindNumbers(int[] nums) {
        int count = 0;
        foreach(var n in nums){
            if(n.ToString().Length % 2 == 0) count++;
        }
        return count;
    }
}