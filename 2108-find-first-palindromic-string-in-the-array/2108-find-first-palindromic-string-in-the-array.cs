public class Solution {
    public string FirstPalindrome(string[] words) {
        foreach(string s in words)
        {
            if(s == new string(s.Reverse().ToArray())) return s;
        }
        return "";
    }
}