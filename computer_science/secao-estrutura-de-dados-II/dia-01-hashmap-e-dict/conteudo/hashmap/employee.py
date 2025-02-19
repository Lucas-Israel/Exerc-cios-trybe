class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def __str__(self) -> str:
        return f"{self._buckets}"

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee["id_num"])
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item["id_num"] == id_num:
                return item["name"]
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    # exercicio 1, refactoring for separate chaining
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        # self._buckets[address]["name"] = new_name
        for bucket in self._buckets[address]:
            if bucket["id_num"] == id_num:
                bucket["name"] = new_name
