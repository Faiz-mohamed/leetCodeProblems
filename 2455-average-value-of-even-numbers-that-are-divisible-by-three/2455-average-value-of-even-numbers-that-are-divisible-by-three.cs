public class Solution {
    public int AverageValue(int[] nums) {
        int sum = 0;
        int count = 0;
        foreach(var i in nums)
        {
            if(i % 6 == 0){
                sum += i;
                count++;
            }
        }
        return count == 0 ? 0 : sum/count;
    }
}