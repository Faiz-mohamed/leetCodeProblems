public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int[] arr = new int[nums.Length];

        int left = 1;
        for(int i = 0; i < nums.Length; i++)
        {
            arr[i] = left;
            left *= nums[i];
        }

        int right = 1;
        for(int j = nums.Length-1; j >= 0; j--)
        {
            arr[j] *= right;
            right *= nums[j];
        }

        return arr;
    }
}