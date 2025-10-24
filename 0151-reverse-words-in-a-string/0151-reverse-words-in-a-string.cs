public class Solution {
    public string ReverseWords(string s) {
        string[] words = s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        Array.Reverse(words);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < words.Length; i++)
        {
            sb.Append(words[i]);
            if(i < words.Length - 1) sb.Append(' ');
        }
        return sb.ToString();
    }
}