public class Solution {
    public int[] RunningSum(int[] nums) {
        int sum = 0;
        int[] arr = new int[nums.Length];
        for (int n = 0; n < nums.Length; n++)
        {
            sum += nums[n];
            arr[n] = sum;
        }
        return arr;
    }
}