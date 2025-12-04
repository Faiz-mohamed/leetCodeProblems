public class Solution {
    public int LengthOfLongestSubstring(string s) {
        HashSet<char> set = new HashSet<char>();
        int left = 0;
        int MaxLen = 0;
        for (int right = 0; right < s.Length; right++){
            while (set.Contains(s[right])){
                set.Remove(s[left]);
                left++;
            }
            set.Add(s[right]);
            MaxLen = Math.Max(MaxLen, right - left + 1);
        }
        return MaxLen;
    }
}