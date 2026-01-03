public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        if (nums.Length < 3) return new List<IList<int>>();

        Array.Sort(nums);
        IList<IList<int>> result = new List<IList<int>>();

        for (int i = 0; i < nums.Length - 2; i++){
            if (i > 0 && nums[i] == nums[i-1]) continue;

            int left = i + 1;
            int right = nums.Length - 1;
            int target = -nums[i];

            while (left < right){
                int sum = nums[left] + nums[right];

                if (target == sum){
                    result.Add(new List<int> { nums[i], nums[left], nums[right] });

                    while (left < right && nums[left] == nums[left + 1]){
                        left++;
                    }

                    while (left < right && nums[right] == nums[right - 1]){
                        right--;
                    }

                    left++;
                    right--;
                }
                else if (sum < target){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return result;
    }
}


//brute force attempt below (TLE)

// public class Solution {
//     public IList<IList<int>> ThreeSum(int[] nums) {

//         if (nums.Length < 3) return new List<IList<int>>();

//         HashSet<string> seen = new HashSet<string>();
//         IList<IList<int>> list = new List<IList<int>>();

//         for (int i = 0; i < nums.Length-2; i++){
//             for (int j = i + 1; j < nums.Length-1; j++){
//                 for (int k = j + 1; k < nums.Length; k++){
//                     if (nums[j] + nums[k] == -nums[i]){
//                         List<int> triplet = new List<int> { nums[i], nums[j], nums[k] };
//                         triplet.Sort();

//                         string key = $"{triplet[0]},{triplet[1]},{triplet[2]}";

//                         if (!seen.Contains(key)){
//                             seen.Add(key);
//                             list.Add(triplet);
//                         }
//                     }
//                 }
//             }
//         }

//         return list;
//     }
// }
