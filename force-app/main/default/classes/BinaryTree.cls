public with sharing class BinaryTree {
    public BinaryTree() {
        
    }
    public class Node{
        Object data;
        Node right;
        Node left;

        public Node(Object data){
            this.data = data;
            this.right = NULL;
            this.left = NULL;
        }
    }


    Node root;

    // Method void insert data 

    private void insertData(Object data){

        if(root == NULL){
            root = new Node(data);
            return;
        }

        List<Node> nodesList = new List<Node>();
        
        nodesList.add(root);

        while (!nodesList.isEmpty()) {
            
            Node currentNode = nodesList.get(0);
            nodesList.remove(0);


            if(currentNode.left !=NULL){
                nodesList.add(currentNode.left);
            }
            else{
                currentNode.left = new Node(data);
                return;
            }

            if(currentNode.right !=NULL){
                nodesList.add(currentNode.right);
            }
            else {
                currentNode.right = new Node(data);
                return;

            }
        }

    }

    public void createBinaryTree(List<Object> elements) {

        // * Inserting elements in binary tree
        for(Object element : elements) {
            insertData(element);
        }
    }


    public void levelOrderPrint() {

        // * Checking if root is not NULL
        if(root!=NULL) {

            String result = '\n';

            // * Initializing a queue
            List<Node> nodesQueue = new List<Node>();

            // * Adding root node to the queue
            nodesQueue.add(root);

            // * Looping while queue is not empty
            while(!nodesQueue.isEmpty()) {

                // * Getting nodes at current level
                Integer nodesAtCurrentLevel = nodesQueue.size();

                // * Looping while nodes at current level is more than 0
                while(nodesAtCurrentLevel>0) {

                    // * Getting the current node and removing it from the queue
                    Node current = nodesQueue.get(0);
                    nodesQueue.remove(0);

                    // * Adding current node data to the result
                    result += current.data + ' ';

                    // * If left child of the current node is not NULL, add it to the queue
                    if(current.left!=NULL) {
                        nodesQueue.add(current.left);
                    }

                    // * If right child of the current node is not NULL, add it to the queue
                    if(current.right!=NULL) {
                        nodesQueue.add(current.right);
                    }

                    // * Decrementing nodes at current level by 1
                    nodesAtCurrentLevel--;
                }

                // * Adding a new line to the result for next level
                result += '\n';
            }

            // * Displaying the result
            System.debug(result);
        } 

        // * If root is NULL, display error message
        else {
            System.debug('Tree not found');
        }
    }
}