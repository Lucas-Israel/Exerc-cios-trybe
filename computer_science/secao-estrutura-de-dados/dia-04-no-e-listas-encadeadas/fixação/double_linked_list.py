from double_link_node import DNode


class DLinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = DNode(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = DNode(value)
        last_value.prev = self.head_value
        current_value = self.head_value

        if current_value is None:
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = DNode(value)
        next_value.next = current_value.next
        next_value.prev = current_value.prev
        current_value.next = next_value
        self.__length += 1


if __name__ == '__main__':
    a = DLinkedList()
    a.insert_first(1)
    a.insert_last(3)
    a.insert_at(2, 1)
    print(a)
