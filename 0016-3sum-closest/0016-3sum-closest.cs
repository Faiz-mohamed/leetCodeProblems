public class Solution {
    public int ThreeSumClosest(int[] nums, int target) {
        if (nums.Length < 3) return 0;

        Array.Sort(nums);
        int closestSum = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < nums.Length - 2; i++){
            int left = i + 1;
            int right = nums.Length - 1;
            while (left < right){
                int currentSum = nums[i] + nums[left] + nums[right];

                if (Math.Abs(target - currentSum) < Math.Abs(target - closestSum)){
                    closestSum = currentSum;
                }

                if (currentSum == target){
                    return target;
                }
                else if (currentSum < target){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return closestSum;
    }
}