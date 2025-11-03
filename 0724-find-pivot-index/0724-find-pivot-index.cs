public class Solution {
    public int PivotIndex(int[] nums) {
        int leftSum = 0;
        int rightSum = 0;
        for (int i = 0; i < nums.Length; i++) rightSum += nums[i];
        for (int j = 0; j < nums.Length; j++)
        {
            rightSum -= nums[j];
            if (rightSum == leftSum) return j;
            leftSum += nums[j];
        }
        return -1;
    }
}