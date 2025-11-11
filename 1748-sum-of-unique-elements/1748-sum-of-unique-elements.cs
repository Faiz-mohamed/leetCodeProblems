public class Solution {
    public int SumOfUnique(int[] nums) {
        HashSet<int> seen = new HashSet<int>();
        HashSet<int> uniq = new HashSet<int>();

        foreach (int n in nums) {
            if (seen.Contains(n)) {
                uniq.Remove(n);
            } else {
                seen.Add(n);
                uniq.Add(n);
            }
        }

        int sum = 0;
        foreach (int n in uniq)
            sum += n;

        return sum;
    }
}