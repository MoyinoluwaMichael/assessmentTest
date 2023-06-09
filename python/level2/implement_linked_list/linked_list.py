from node import Node


class LinkedList(Node):
    def __init__(self):
        self.__arr: list = []

    def get_head(self):
        return self.__arr[0]

    def insertAtTail(self, data):
        self.__arr.append(data)

    def insertAtHead(self, data):
        self.__arr.insert(0, data)

    def delete(self, data):
        self.__arr.remove(data)

    def deleteAtHead(self):
        self.__arr.remove(self.__arr[0])

    def search(self, data):
        return self.__arr.__contains__(data)

    def isEmpty(self):
        return len(self.__arr) == 0

    def remove_duplicates(self):
        for each in self.__arr:
            count = 0
            for each2 in self.__arr:
                if each == each2:
                    count += 1
            if count > 1:
                self.__arr.remove(each)

    def __str__(self):
        return self.__arr


# node: Node = LinkedList()
# print(node.isEmpty())
# node.insertAtHead(9)
# node.insertAtHead(8)
# node.insertAtTail(7)
# node.deleteAtHead()
# print(node.get_head())
