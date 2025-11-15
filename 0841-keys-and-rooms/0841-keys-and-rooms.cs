public class Solution {
    public bool CanVisitAllRooms(IList<IList<int>> rooms) {
        bool[] visited = new bool[rooms.Count];

        void DFS (int room)
        {
            visited[room] = true;

            foreach (int key in rooms[room])
            {
                if (!visited[key]){
                    DFS(key);
                }
            }
        }
        
        DFS(0);

        foreach (bool v in visited){
            if (!v) return false;
        }
        return true;
    }
}