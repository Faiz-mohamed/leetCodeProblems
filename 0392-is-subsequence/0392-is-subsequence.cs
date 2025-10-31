public class Solution {
    public bool IsSubsequence(string s, string t) {
        if(s.Length == 0) return true;
        int Idx = 0;
        for (int i = 0; i < t.Length; i++)
        {
            if(s[Idx] == t[i]){
                Idx++;
                if(s.Length == Idx) return true;
            }
        }
        return false;
    }
}