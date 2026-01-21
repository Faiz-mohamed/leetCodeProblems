public class Solution {
    public string DecodeString(string s) {
        Stack<(int, string)> stack = new Stack<(int, string)>();
        string currentString = "";
        int currentNum = 0;

        foreach (char c in s) {
            if (char.IsDigit(c)) {
                currentNum = currentNum * 10 + int.Parse(c.ToString());
            }
            else if (c == '[') {
                stack.Push((currentNum, currentString));
                currentString = "";
                currentNum = 0;
            }
            else if (c == ']') {
                var (prevNum, prevString) = stack.Pop();

                string temp = "";
                for (int i = 0; i < prevNum; i++) {
                    temp += currentString;
                }

                currentString = prevString + temp;
            }
            else {
                currentString += c;
            }
        }

        return currentString;
    }
}