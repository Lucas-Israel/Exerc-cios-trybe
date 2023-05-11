from conteudo.hashmap.employee import HashMap


def test_hash_map():
    employees = [
        (14, "name1"),
        (23, "name2"),
        (10, "name3"),
        (9, "name4"),
        (20, "abcdef"),
    ]

    employees_dict_list = []
    hash_map = HashMap()

    for emp in employees:
        emp_dict = {"id_num": emp[0], "name": emp[1]}
        employees_dict_list.append(emp_dict)

    assert len(employees_dict_list) == len(employees)

    for emp in employees_dict_list:
        hash_map.insert(emp)

    for element in employees:
        assert hash_map.get_value(element[0]) == element[1]

    hash_map.update_value(10, "name30")

    assert hash_map.get_value(10) == "name30"
    assert hash_map.get_value(20) == "abcdef"
