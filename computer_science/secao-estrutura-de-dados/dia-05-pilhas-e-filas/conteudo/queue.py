class Queue:
    def __init__(self):
        self.queue = list()

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        # Se não houver mais itens na fila, o método retornará None
        if len(self.queue) == 0:
            return None
        # O método pop remove e retorna o valor do índice fornecido
        return self.queue.pop(0)

    def __str__(self):
        str_items = ""
        for i in range(len(self.queue)):
            value = self.queue[i]
            str_items += str(value)
            if i + 1 < len(self.queue):
                str_items += ", "

        return "Queue(" + str_items + ")"
