public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        double MaxSum = 0;

        for(int i = 0; i < k; i++) MaxSum += nums[i];

        double temp = MaxSum;

        for(int j = k; j < nums.Length; j++)
        {
            temp += nums[j] - nums[j - k];
            if(temp > MaxSum) MaxSum = temp;
        }

        return MaxSum / k;
    }
}