#include <stdio.h>   // For printf
#include <stdlib.h>  // For malloc, free, exit
#include <string.h>  // For strlen, strcpy

// --- Stack Data Structure Definition (using a dynamic array) ---
#define MAX_SIZE 100 // Define a maximum size for the stack (can be made dynamic)

typedef struct {
    char items[MAX_SIZE]; // Array to store stack elements
    int top;             // Index of the top element
} Stack;

// Function to initialize a stack
void initStack(Stack* s) {
    s->top = -1; // -1 indicates an empty stack
}

// Function to check if stack is empty
int isEmpty(Stack* s) {
    return s->top == -1;
}

// Function to check if stack is full
int isFull(Stack* s) {
    return s->top == MAX_SIZE - 1;
}

// Function to push a character onto the stack
void push(Stack* s, char value) {
    if (isFull(s)) {
        printf("Stack Overflow!\n");
        exit(1); // Exit if stack is full
    }
    s->items[++(s->top)] = value;
}

// Function to pop a character from the stack
char pop(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack Underflow!\n");
        exit(1); // Exit if stack is empty
    }
    return s->items[(s->top)--];
}

// --- String Reverser Logic ---
char* reverseString(const char* input) {
    Stack charStack;
    initStack(&charStack);

    int len = strlen(input);

    // Push characters onto the stack
    for (int i = 0; i < len; i++) {
        push(&charStack, input[i]);
    }

    // Allocate memory for the reversed string
    char* reversed = (char*)malloc(sizeof(char) * (len + 1)); // +1 for null terminator
    if (reversed == NULL) {
        printf("Memory allocation failed!\n");
        exit(1);
    }

    // Pop characters from the stack to build the reversed string
    for (int i = 0; i < len; i++) {
        reversed[i] = pop(&charStack);
    }
    reversed[len] = '\0'; // Null-terminate the C string

    return reversed;
}

int main() {
    char* original1 = "hello";
    char* reversed1 = reverseString(original1);
    printf("Original: %s, Reversed: %s\n", original1, reversed1); // Output: Original: hello, Reversed: olleh
    free(reversed1); // Free allocated memory

    char* original2 = "Programming";
    char* reversed2 = reverseString(original2);
    printf("Original: %s, Reversed: %s\n", original2, reversed2); // Output: Original: Programming, Reversed: gnimmargorP
    free(reversed2); // Free allocated memory

    return 0;
}