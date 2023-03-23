from exercicios.exercicio3 import email_validator


def test_email_validator():
    assert email_validator('abc@def.com')
    assert not email_validator('abc@def.coms')
    assert not email_validator('4bc@def.com')
