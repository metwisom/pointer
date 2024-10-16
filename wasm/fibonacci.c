#include <stdint.h>

int add(int  n) {
    if (n <= 1) return n;
    return add(n - 1) + add(n - 2);
}
