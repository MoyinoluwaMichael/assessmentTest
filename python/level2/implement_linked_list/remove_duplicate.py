from linked_list import LinkedList


def remove_duplicates(link_list: LinkedList):
    link_list.remove_duplicates()
    return link_list


linked_list: LinkedList = LinkedList()
linked_list.insertAtTail(1)
linked_list.insertAtTail(1)
linked_list.insertAtTail(2)
linked_list.insertAtTail(2)
linked_list.insertAtTail(3)
linked_list.insertAtTail(3)

remove_duplicates(linked_list)
# print(linked_list)