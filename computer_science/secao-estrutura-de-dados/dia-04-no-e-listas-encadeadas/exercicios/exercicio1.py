# Aprimorando a classe Lista: nossa classe Lista atende as principais
# operações que essa TAD nos oferece, mas que tal melhorarmos?
# Para isso, você deve adicionar os seguintes métodos:

# a. A operação clear nos permite remover todos os Nodes da lista;

# b. A operação __get_node_at nos permite acessar o Node em qualquer
# posição da lista.

# Após criada as operações anteriores, refatore os seguintes métodos
# para que utilizem a __get_node_at ante iterações:

# insert_at;

# insert_last;

# remove_last;

# remove_at;

# get_element_at.

# ⚠️ Faça a análise de complexidade da sua solução.

import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


if __name__ == '__main__':
    from conteudo.node import Node
else:
    from conteudo.node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        actual_last_value = self.__get_node_at(len(self) - 1)
        actual_last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
        while not self.is_empty():
            self.remove_first()

    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned


# __get_node_at O(n)
# insert_at O(n)
# insert_last O(1) caso eu tenha o tail e O(n) se nao tiver tail
# remove_last O(1) caso eu tenha tail e O(n) se nao tiver tail
# remove_at O(n)
# get_element_at O(n)


if __name__ == '__main__':
    a = LinkedList()
    a.insert_first(1)
    a.insert_at(2, len(a))
    a.insert_at(3, len(a))
    print(a)
