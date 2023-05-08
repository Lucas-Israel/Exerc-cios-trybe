import sys
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))


if __name__ == "__main__":
    from conteudo.stack import Stack
else:
    from conteudo.stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            # Sum operation
            count = 0
            for _ in range(stack.size()):
                count += stack.pop()
            stack.push(count)
        elif token == "*":
            # multiply operation
            count = 1
            for _ in range(stack.size()):
                count *= stack.pop()
            stack.push(count)
        else:
            # add number operation
            stack.push(int(token))

    return stack.pop()
