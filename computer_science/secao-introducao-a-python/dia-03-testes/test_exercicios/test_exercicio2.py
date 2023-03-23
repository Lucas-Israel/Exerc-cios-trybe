from exercicios.exercicio2 import text_to_phone_number
import pytest


def test_return_the_proper_number():
    'Testa as string e recebe o numero correto'
    assert text_to_phone_number('1-HOME-SWEET-HOME') == '1-4663-79338-4663'
    assert text_to_phone_number('MY-MISERABLE-JOB') == '69-647372253-562'


def test_text_cannot_be_empty():
    'Testa se a função nao recebe parametro'
    with pytest.raises(ValueError, match='Text cannot be empty'):
        text_to_phone_number('')
    with pytest.raises(ValueError, match="Text cannot be empty"):
        text_to_phone_number()
    with pytest.raises(ValueError, match="Expression with invalid length"):
        text_to_phone_number('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
