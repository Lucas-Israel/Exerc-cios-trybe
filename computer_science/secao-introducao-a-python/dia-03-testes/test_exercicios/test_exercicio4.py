from exercicios.exercicio4 import check_email_list

valid_emails = ['abc@def.com', 'aaa@bbb.ccc', 'zzz@zzz.zzz']
invalid_email_begining_number = ['abc@def.com', '4bc@def.com', 'zzz@zzz.zzz']
invalid_email_middle_not_alpha = ['abc@def.com', 'aaa@4#bb.ccc', 'zzz@zzz.zzz']
invalid_email_end_not_len_3 = ['abc@def.com', 'aaa@.bbb.cccs', 'zzz@zzz.zzz']


def test_checking_emails_in_a_list():
    assert check_email_list(valid_emails) == 'No wrong emails'


def test_checking_wrong_emails():
    assert check_email_list(invalid_email_begining_number) == '4bc@def.com'
    assert check_email_list(invalid_email_middle_not_alpha) == 'aaa@4#bb.ccc'
    assert check_email_list(invalid_email_end_not_len_3) == 'aaa@.bbb.cccs'
