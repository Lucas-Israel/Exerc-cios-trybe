from linked_list import LinkedList


class Queue:
    def __init__(self) -> None:
        self.list = LinkedList()

    def __str__(self) -> str:
        new_list = self.list.head_value
        new_string = ""
        for num in range(len(self.list)):
            new_string += str(new_list.value)
            if num != len(self.list) - 1:
                new_string += ", "
            new_list = new_list.next

        return f"[{new_string}]"

    def enqueue(self, num):
        self.list.insert_last(num)

    def dequeue(self):
        self.list.remove_first()

    def peek(self):
        return self.list.get_element_at(0).value

    def is_empty(self):
        return self.list.is_empty()


if __name__ == "__main__":
    a = Queue()
    print(a.is_empty())
    for num in range(1, 6):
        a.enqueue(num)
    a.dequeue()
    print(a)
    print(a.peek())
    print(a.is_empty())
